import { UpdateCategoryUseCase } from '../../application/useCases/category/UpdateCategoryUseCase';

export function makeUpdateCategoryUseCase() {
  return new UpdateCategoryUseCase();
}
