import { ListAllCategoriesController } from '../application/controllers/category/ListAllCategoriesController';
import { makeListAllCategoriesUseCase } from './makeListAllCategoriesUseCase';

export function makeListAllCategoriesController() {
  const listAllCategoriesUseCase = makeListAllCategoriesUseCase();
  return new ListAllCategoriesController(listAllCategoriesUseCase);
}
