import { CreateContactController } from '../application/controllers/contact/CreateContactController';
import { makeCreateContactUseCase } from './makeCreateContactUseCase';

export function makeCreateContactController() {
  const createContactUseCase = makeCreateContactUseCase();
  return new CreateContactController(createContactUseCase);
}
