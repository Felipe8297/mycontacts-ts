import { prismaClient } from '../../../libs/prismaClient';
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
  async execute(input: IContactInput): Promise<IOutput> {
    const contact =  await prismaClient.contact.findUnique({
      where: {
        id: input.id,
      },
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
    });

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
