import { DeleteCategoryUseCase } from '../../application/useCases/category/DeleteCategoryUseCase';
import { PrismaCategoryRepository } from '../../infra/repositories/PrismaCategoryRepository';

export function makeDeleteCategoryUseCase() {
  const categoryRepository = new PrismaCategoryRepository();
  return new DeleteCategoryUseCase(categoryRepository);
}
