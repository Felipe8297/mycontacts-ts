import { prismaClient } from '../../../libs/prismaClient';

interface ICreateCategoryInput {
  name: string;
}

interface IOutput {
  id: string;
  name: string;
}

export class CreateCategoryUseCase {
  async execute(input: ICreateCategoryInput): Promise<IOutput> {
    const category = await prismaClient.category.create({
      data: {
        name: input.name,
      },
    });

    return {
      id: category.id,
      name: category.name,
    };
  }
}
