import { UpdateContactUseCase } from '../../application/useCases/contact/UpdateContactUseCase';
import { PrismaContactRepository } from '../../infra/repositories/PrismaContactRepository';

export function makeUpdateContactUseCase() {
  const contactRepository = new PrismaContactRepository();
  return new UpdateContactUseCase(contactRepository);
}
