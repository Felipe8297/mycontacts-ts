import { IContactRepository } from '../../../interfaces/IContactRepository';
import { ContactNotFound } from '../../errors/ContactNotFound';
 
 interface IUpdateContactInput {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
 }

 interface IOutput {
  contact: IUpdateContactInput;
 }

 export class UpdateContactUseCase {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(input: IUpdateContactInput): Promise<IOutput> {

    const contact = await this.contactRepository.update(input.id, {
      ...(input.name !== undefined && { name: input.name }),
      ...(input.email !== undefined && { email: input.email }),
      ...(input.phone !== undefined && { phone: input.phone }),
      ...(input.category !== undefined && { categoryId: input.category }),
    });

    if (!contact) {
      throw new ContactNotFound();
    }

    return {
      contact: {
        id: contact.id,
        name: contact.name ?? '',
        email: contact.email ?? '',
        phone: contact.phone ?? '',
        category: contact.categoryId ?? '',
      },
    };
  }
 }
