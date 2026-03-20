import { UpdateContactController } from '../../application/controllers/contact/UpdateContactController';
import { makeListContactByIdUseCase } from './makeListContactByIdUseCase';
import { makeUpdateContactUseCase } from './makeUpdateContactUseCase';

export function makeUpdateContactController(){
  const updateContactUseCase = makeUpdateContactUseCase();
  const listContactByIdUseCase = makeListContactByIdUseCase();
  return new UpdateContactController(updateContactUseCase, listContactByIdUseCase);
}
