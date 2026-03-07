import { DeleteCategoryUseCase } from '../application/useCases/DeleteCategoryUseCase';

export function makeDeleteCategoryUseCase() {
  return new DeleteCategoryUseCase();
}
