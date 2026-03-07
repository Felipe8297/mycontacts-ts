import { ListCategoryByIdController } from '../application/controllers/category/ListCategoryByIdController';
import { makeListCategoryByIdUseCase } from './makeListCategoryByIdUseCase';

export function makeListCategoryByIdController() {
  const listCategoryByIdUseCase = makeListCategoryByIdUseCase();
  return new ListCategoryByIdController(listCategoryByIdUseCase);
}
