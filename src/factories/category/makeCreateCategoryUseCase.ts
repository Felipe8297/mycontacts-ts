import { CreateCategoryUseCase } from '../../application/useCases/category/CreateCategoryUseCase';
import { PrismaCategoryRepository } from '../../infra/repositories/PrismaCategoryRepository';

export function makeCreateCategoryUseCase() {
  const categoryRepository = new PrismaCategoryRepository();
  return new CreateCategoryUseCase(categoryRepository);
}
