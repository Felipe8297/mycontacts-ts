import { DeleteCategoryUseCase } from '../application/useCases/category/DeleteCategoryUseCase';

export function makeDeleteCategoryUseCase() {
  return new DeleteCategoryUseCase();
}
