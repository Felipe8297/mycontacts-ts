import { ListContactByIdController } from '../../application/controllers/contact/ListContactByIdController';
import { makeListContactByIdUseCase } from './makeListContactByIdUseCase';

export function makeListContactByIdController() {
  const listContactByIdUseCase = makeListContactByIdUseCase();
  return new ListContactByIdController(listContactByIdUseCase);
}
