import { prismaClient } from '../../../libs/prismaClient';

interface ICategories {
  id: string;
  name: string;
}

interface IOutput {
  categories: ICategories[];
}

export class ListAllCategoriesUseCase {
  async execute(): Promise<IOutput> {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'desc',
      },
    });

    return {
      categories: categories.map((category) => ({
        id: category.id,
        name: category.name,
      })),
    };
  }
}
