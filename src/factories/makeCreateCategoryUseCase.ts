import { CreateCategoryUseCase } from '../application/useCases/CreateCategoryUseCase';

export function makeCreateCategoryUseCase() {
  return new CreateCategoryUseCase();
}
