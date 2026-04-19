import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';
import { CategoryNotFound } from '../../errors/CategoryNotFound';

interface IUpdateCategoryInput {
  id: string;
  name?: string;
}

interface IOutput {
  id: string;
  name: string;
}

export class UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(input: IUpdateCategoryInput): Promise<IOutput> {

    const category = await this.categoryRepository.update(input.id, {
      name: input.name ?? '',
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
