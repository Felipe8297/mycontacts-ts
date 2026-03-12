import { prismaClient } from '../../libs/prismaClient';
import { CategoryNotFound } from '../errors/CategoryNotFound';

interface IDeleteCategoryInput {
  id: string;
}

interface IOutput {
  id: string;
  name: string;
}

export class DeleteCategoryUseCase {
  async execute(input: IDeleteCategoryInput): Promise<IOutput> {
    const category = await prismaClient.category.delete({
      where: {
        id: input.id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    if (!category) {
      throw new CategoryNotFound();
    }
    return {
      id: category.id,
      name: category.name,
    };
  }
}
