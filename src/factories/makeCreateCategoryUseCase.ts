import { CreateCategoryUseCase } from '../application/useCases/category/CreateCategoryUseCase';

export function makeCreateCategoryUseCase() {
  return new CreateCategoryUseCase();
}
