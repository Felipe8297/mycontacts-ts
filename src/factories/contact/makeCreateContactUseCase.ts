import { CreateContactUseCase } from '../../application/useCases/contact/CreateContactUseCase';
import { PrismaCategoryRepository } from '../../infra/repositories/PrismaCategoryRepository';
import { PrismaContactRepository } from '../../infra/repositories/PrismaContactRepository';

export function makeCreateContactUseCase() {
  const contactRepository = new PrismaContactRepository();
  const categoryRepository = new PrismaCategoryRepository();
  return new CreateContactUseCase(contactRepository, categoryRepository);
}
