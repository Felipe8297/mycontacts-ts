import { ListAllCategoriesUseCase } from '../../application/useCases/category/ListAllCategoriesUseCase';
import { PrismaCategoryRepository } from '../../infra/repositories/PrismaCategoryRepository';

export function makeListAllCategoriesUseCase() {
  const categoryRepository = new PrismaCategoryRepository();
  return new ListAllCategoriesUseCase(categoryRepository);
}
