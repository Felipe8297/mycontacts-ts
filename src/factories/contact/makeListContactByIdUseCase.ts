import { ListContactByIdUseCase } from '../../application/useCases/contact/ListContactByIdUseCase';
import { PrismaContactRepository } from '../../infra/repositories/PrismaContactRepository';

export function makeListContactByIdUseCase() {
  const contactRepository = new PrismaContactRepository();
  return new ListContactByIdUseCase(contactRepository);
}
