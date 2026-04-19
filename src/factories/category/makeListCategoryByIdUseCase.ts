import { ListCategoryByIdUseCase } from '../../application/useCases/category/ListCategoryByIdUseCase';
import { PrismaCategoryRepository } from '../../infra/repositories/PrismaCategoryRepository';

export function makeListCategoryByIdUseCase() {
  const categoryRepository = new PrismaCategoryRepository();
  return new ListCategoryByIdUseCase(categoryRepository);
}
