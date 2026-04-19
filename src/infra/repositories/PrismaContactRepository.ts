import {
  IContactData,
  IContactRepository,
  IContactWithCategory,
} from '../../interfaces/IContactRepository';
import { prismaClient } from '../../libs/prismaClient';

export class PrismaContactRepository implements IContactRepository {
  async create(data: {
    name: string;
    email: string;
    phone?: string | null;
    categoryId?: string | null;
  }): Promise<IContactData> {
    return prismaClient.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        categoryId: data.categoryId ?? null,
      },
    });
  }

  async findAll(): Promise<IContactWithCategory[]> {
    return prismaClient.contact.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        categoryId: true,
        category: { select: { name: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: string): Promise<IContactWithCategory | null> {
    return prismaClient.contact.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        categoryId: true,
        category: { select: { name: true } },
      },
    });
  }

  async findByEmail(email: string): Promise<{ id: string } | null> {
    return prismaClient.contact.findUnique({
      where: { email },
      select: { id: true },
    });
  }

  async update(
    id: string,
    data: { name?: string; email?: string; phone?: string; categoryId?: string },
  ): Promise<IContactData> {
    return prismaClient.contact.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<{ id: string; name: string; email: string; phone: string | null }> {
    return prismaClient.contact.delete({
      where: { id },
      select: { id: true, name: true, email: true, phone: true },
    });
  }
}
