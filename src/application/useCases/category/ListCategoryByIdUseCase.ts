import { prismaClient } from '../../../libs/prismaClient';
import { CategoryNotFound } from '../../errors/CategoryNotFound';

interface ICategoryInput {
  id: string;
  name?: string;
}

interface IOutput {
  category: ICategoryInput;
}

export class ListCategoryByIdUseCase {
  async execute(input: ICategoryInput): Promise<IOutput> {
    const category = await prismaClient.category.findUnique({
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
      category: {
        id: category.id,
        name: category.name,
      },
    };
  }
}
