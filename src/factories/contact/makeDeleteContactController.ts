import { DeleteContactController } from '../../application/controllers/contact/DeleteContactController';
import { makeDeleteContactUseCase } from './makeDeleteContactUseCase';
import { makeListContactByIdUseCase } from './makeListContactByIdUseCase';

export function makeDeleteContactController() {
  const deleteContactUseCase = makeDeleteContactUseCase();
  const listContactByIdUseCase = makeListContactByIdUseCase();
  return new DeleteContactController(deleteContactUseCase, listContactByIdUseCase);
}
