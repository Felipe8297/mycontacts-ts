import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';

interface ICreateCategoryInput {
  name: string;
}

interface IOutput {
  id: string;
  name: string;
}

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(input: ICreateCategoryInput): Promise<IOutput> {
    const category = await this.categoryRepository.create({
      name: input.name,
    });

    return {
      id: category.id,
      name: category.name,
    };
  }
}
