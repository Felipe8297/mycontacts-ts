import { prismaClient } from '../../libs/prismaClient';
import { CategoryNotFound } from '../errors/CategoryNotFound';

interface IUpdateCategoryInput {
  id: string;
  name?: string;
}

interface IOutput {
  id: string;
  name: string;
}

export class UpdateCategoryUseCase {
  async execute(input: IUpdateCategoryInput): Promise<IOutput> {

    const category = await prismaClient.category.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name ?? '',
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
