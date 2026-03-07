import { UpdateCategoryUseCase } from '../application/useCases/UpdateCategoryUseCase';

export function makeUpdateCategoryUseCase() {
  return new UpdateCategoryUseCase();
}
