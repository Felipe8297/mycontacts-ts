import { ListAllContactsController } from '../../application/controllers/contact/ListAllContactsController';
import { makeListAllContactsUseCase } from './makeListAllContactsUseCase';

export function makeListAllContactsController() {
  const listAllContactsUseCase = makeListAllContactsUseCase();
  return new ListAllContactsController(listAllContactsUseCase);
}
