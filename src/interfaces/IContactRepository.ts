export interface IContactData {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  categoryId: string | null;
}

export interface IContactWithCategory extends IContactData {
  category: { name: string } | null;
}

export interface IContactRepository {
  create(data: {
    name: string;
    email: string;
    phone?: string | null;
    categoryId?: string | null;
  }): Promise<IContactData>;
  findAll(): Promise<IContactWithCategory[]>;
  findById(id: string): Promise<IContactWithCategory | null>;
  findByEmail(email: string): Promise<{ id: string } | null>;
  update(
    id: string,
    data: {
      name?: string;
      email?: string;
      phone?: string;
      categoryId?: string;
    },
  ): Promise<IContactData>;
  delete(id: string): Promise<{ id: string; name: string; email: string; phone: string | null }>;
}
