import { ICategoryRepository } from '../../../interfaces/ICategoryRepository';
import { IContactRepository } from '../../../interfaces/IContactRepository';
import { CategoryNotFound } from '../../errors/CategoryNotFound';

interface ICreateContactInput {
  name: string;
  email: string;
  phone?: string;
  category?: string;
}

interface IOutput {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  category_id: string | null;
}

export class CreateContactUseCase {
  constructor(
    private readonly contactRepository: IContactRepository,
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(input: ICreateContactInput): Promise<IOutput> {
    if (input.category) {
      const categoryExists = await this.categoryRepository.findById(input.category);

      if (!categoryExists) {
        throw new CategoryNotFound();
      }
    }

    const existingContact = await this.contactRepository.findByEmail(input.email);

    if (existingContact) {
      throw new Error('This email is already in use');
    }

    const contact = await this.contactRepository.create({
      name: input.name,
      email: input.email,
      phone: input.phone ?? null,
      categoryId: input.category ?? null,
    });

    return {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      category_id: contact.categoryId,
    };
  }
}
