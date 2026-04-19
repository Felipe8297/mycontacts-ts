import { DeleteContactUseCase } from '../../application/useCases/contact/DeleteContactUseCase';
import { PrismaContactRepository } from '../../infra/repositories/PrismaContactRepository';

export function makeDeleteContactUseCase() {
  const contactRepository = new PrismaContactRepository();
  return new DeleteContactUseCase(contactRepository);
}
