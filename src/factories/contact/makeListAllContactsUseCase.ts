import { ListAllContactsUseCase } from '../../application/useCases/contact/ListAllContactsUseCase';

export function makeListAllContactsUseCase() {
  return new ListAllContactsUseCase();
}
