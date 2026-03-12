import { prismaClient } from '../../../libs/prismaClient';
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
  categoryId: string | null;
}

export class CreateContactUseCase {
  async execute(input: ICreateContactInput): Promise<IOutput> {
    if (input.category) {
      const categoryExists = await prismaClient.category.findUnique({
        where: {
          id: input.category,
        },
      });

      if (!categoryExists) {
        throw new CategoryNotFound();
      }
    }

    const existingContact = await prismaClient.contact.findUnique({
      where: {
        email: input.email,
      },
    });

    if (existingContact) {
      throw new Error('This email is already in use');
    }

    const contact = await prismaClient.contact.create({
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone ?? null,
        categoryId: input.category ?? null,
      },
    });

    return {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      categoryId: contact.categoryId,
    };
  }
}
