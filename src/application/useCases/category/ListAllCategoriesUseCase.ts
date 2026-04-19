import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';

interface ICategories {
  id: string;
  name: string;
}

interface IOutput {
  categories: ICategories[];
}

export class ListAllCategoriesUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(): Promise<IOutput> {
    const categories = await this.categoryRepository.findAll();

    return {
      categories: categories.map((category) => ({
        id: category.id,
        name: category.name,
      })),
    };
  }
}
