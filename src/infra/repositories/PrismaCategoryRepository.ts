import { ICategoryData, ICategoryRepository } from '../../interfaces/ICategoryRepository';
import { prismaClient } from '../../libs/prismaClient';

export class PrismaCategoryRepository implements ICategoryRepository {
  async create(data: { name: string }): Promise<ICategoryData> {
    return prismaClient.category.create({
      data: { name: data.name },
      select: { id: true, name: true },
    });
  }

  async findAll(): Promise<ICategoryData[]> {
    return prismaClient.category.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'desc' },
    });
  }

  async findById(id: string): Promise<ICategoryData | null> {
    return prismaClient.category.findUnique({
      where: { id },
      select: { id: true, name: true },
    });
  }

  async update(id: string, data: { name?: string }): Promise<ICategoryData> {
    return prismaClient.category.update({
      where: { id },
      data,
      select: { id: true, name: true },
    });
  }

  async delete(id: string): Promise<ICategoryData> {
    return prismaClient.category.delete({
      where: { id },
      select: { id: true, name: true },
    });
  }
}
