import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';
import { CategoryNotFound } from '../../errors/CategoryNotFound';

interface IDeleteCategoryInput {
  id: string;
}

interface IOutput {
  id: string;
  name: string;
}

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(input: IDeleteCategoryInput): Promise<IOutput> {
    const category = await this.categoryRepository.delete(input.id);
    if (!category) {
      throw new CategoryNotFound();
    }
    return {
      id: category.id,
      name: category.name,
    };
  }
}
