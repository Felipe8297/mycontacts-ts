import { ListAllContactsUseCase } from '../../application/useCases/contact/ListAllContactsUseCase';
import { PrismaContactRepository } from '../../infra/repositories/PrismaContactRepository';

export function makeListAllContactsUseCase() {
  const contactRepository = new PrismaContactRepository();
  return new ListAllContactsUseCase(contactRepository);
}
