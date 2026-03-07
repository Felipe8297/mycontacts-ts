import { DeleteCategoryController } from '../application/controllers/category/DeleteCategoryController';
import { makeDeleteCategoryUseCase } from './makeDeleteCategoryUseCase';
import { makeListCategoryByIdUseCase } from './makeListCategoryByIdUseCase';

export function makeDeleteCategoryController() {
  const deleteCategoryUseCase = makeDeleteCategoryUseCase();
  const listCategoryByIdUseCase = makeListCategoryByIdUseCase();
  return new DeleteCategoryController(deleteCategoryUseCase, listCategoryByIdUseCase);
}
