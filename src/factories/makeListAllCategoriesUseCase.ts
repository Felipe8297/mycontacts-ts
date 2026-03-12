import { ListAllCategoriesUseCase } from '../application/useCases/category/ListAllCategoriesUseCase';

export function makeListAllCategoriesUseCase() {
  return new ListAllCategoriesUseCase();
}
