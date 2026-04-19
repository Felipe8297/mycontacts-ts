export interface ICategoryData {
  id: string;
  name: string;
}

export interface ICategoryRepository {
  create(data: { name: string }): Promise<ICategoryData>;
  findAll(): Promise<ICategoryData[]>;
  findById(id: string): Promise<ICategoryData | null>;
  update(id: string, data: { name?: string }): Promise<ICategoryData>;
  delete(id: string): Promise<ICategoryData>;
}
