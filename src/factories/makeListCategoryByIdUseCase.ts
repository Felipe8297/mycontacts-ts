import { ListCategoryByIdUseCase } from '../application/useCases/ListCategoryByIdUseCase';

export function makeListCategoryByIdUseCase() {
  return new ListCategoryByIdUseCase();
}
