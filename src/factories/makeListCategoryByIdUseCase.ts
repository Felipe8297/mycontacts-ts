import { ListCategoryByIdUseCase } from '../application/useCases/category/ListCategoryByIdUseCase';

export function makeListCategoryByIdUseCase() {
  return new ListCategoryByIdUseCase();
}
