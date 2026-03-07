import { ListAllCategoriesUseCase } from '../application/useCases/ListAllCategoriesUseCase';

export function makeListAllCategoriesUseCase() {
  return new ListAllCategoriesUseCase();
}
