import { UpdateCategoryUseCase } from '../../application/useCases/category/UpdateCategoryUseCase';
import { PrismaCategoryRepository } from '../../infra/repositories/PrismaCategoryRepository';

export function makeUpdateCategoryUseCase() {
  const categoryRepository = new PrismaCategoryRepository();
  return new UpdateCategoryUseCase(categoryRepository);
}
