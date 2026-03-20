import { prismaClient } from '../../../libs/prismaClient';
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
  async execute(input: IUpdateContactInput): Promise<IOutput> {
    const data: {
      name?: string;
      email?: string;
      phone?: string;
      categoryId?: string;
    } = {};

    if (input.name !== undefined) {
      data.name = input.name;
    }
    if (input.email !== undefined) {
      data.email = input.email;
    }
    if (input.phone !== undefined) {
      data.phone = input.phone;
    }
    if (input.category !== undefined) {
      data.categoryId = input.category;
    }

    const contact = await prismaClient.contact.update({
      where: {
        id: input.id,
      },
      data,
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
