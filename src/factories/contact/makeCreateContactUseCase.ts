import { CreateContactUseCase } from '../../application/useCases/contact/CreateContactUseCase';

export function makeCreateContactUseCase() {
  return new CreateContactUseCase();
}
