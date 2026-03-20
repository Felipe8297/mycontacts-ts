import { ListContactByIdUseCase } from '../../application/useCases/contact/ListContactByIdUseCase';

export function makeListContactByIdUseCase() {
  return new ListContactByIdUseCase();
}
