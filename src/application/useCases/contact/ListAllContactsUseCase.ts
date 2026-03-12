import { prismaClient } from '../../libs/prismaClient';
import { ContactsNotFound } from '../errors/ContactsNotFound';

interface IContact { 
  id: string;
  name: string;
  email: string;
  phone?: string;
  category_id?: string;
  category?: string;
}

interface IOutput {
  contacts: IContact[];
}

export class ListAllContactsUseCase {
  async execute(): Promise<IOutput> {
    const contacts = await prismaClient.contact.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        categoryId: true,
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    if (contacts.length === 0) {
      throw new ContactsNotFound();
    }

    return {
      contacts: contacts.map((contact) => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone ?? '',
        category_id: contact.categoryId ?? '',
        category: contact.category?.name ?? '',
      })),
    };
  }
}
