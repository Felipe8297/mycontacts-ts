import { IContactRepository } from '../../../interfaces/IContactRepository';
import { ContactNotFound } from '../../errors/ContactNotFound';

interface IContactInput {
  id: string;
}

interface IOutput {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  category?: string | null;
}

export class ListContactByIdUseCase {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(input: IContactInput): Promise<IOutput> {
    const contact = await this.contactRepository.findById(input.id);

    if (!contact) {
      throw new ContactNotFound();
    }
    return {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone ?? '',
      category: contact.category?.name ?? '',
    };
  }
}
