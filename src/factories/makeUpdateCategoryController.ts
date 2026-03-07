import { UpdateCategoryController } from '../application/controllers/category/UpdateCategoryController';
import { makeUpdateCategoryUseCase } from './makeUpdateCategoryUseCase';

export function makeUpdateCategoryController() {
  const updateCategoryUseCase = makeUpdateCategoryUseCase();
  return new UpdateCategoryController(updateCategoryUseCase);
}
