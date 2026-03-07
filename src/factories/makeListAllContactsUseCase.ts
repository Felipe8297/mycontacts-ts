import { ListAllContactsUseCase } from '../application/useCases/ListAllContactsUseCase';

export function makeListAllContactsUseCase() {
  return new ListAllContactsUseCase();
}
