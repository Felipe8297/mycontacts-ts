import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';
import { CategoryNotFound } from '../../errors/CategoryNotFound';

interface ICategoryInput {
  id: string;
  name?: string;
}

interface IOutput {
  category: ICategoryInput;
}

export class ListCategoryByIdUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(input: ICategoryInput): Promise<IOutput> {
    const category = await this.categoryRepository.findById(input.id);

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
