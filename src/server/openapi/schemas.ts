import { z } from '@hono/zod-openapi';

export const ErrorSchema = z.object({
  error: z.string(),
});

export const MessageSchema = z.object({
  message: z.string(),
});

export const IdParamSchema = z.object({
  id: z.uuid(),
});

export const CategorySchema = z.object({
  id: z.uuid(),
  name: z.string(),
});

export const ContactSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
});

export const ContactByIdSchema = ContactSchema.extend({
  category: z.string(),
});

export const CreateCategoryBodySchema = z.object({
  name: z.string().min(1),
});

export const UpdateCategoryBodySchema = z.object({
  name: z.string().min(1),
});

export const CreateContactBodySchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().optional(),
  category: z.uuid().optional(),
});

export const UpdateContactBodySchema = z.object({
  name: z.string().min(1),
  email: z.email().optional(),
  phone: z.string().optional(),
  category: z.uuid().optional(),
});

export const ListCategoriesResponseSchema = z.object({
  categories: z.array(CategorySchema),
});

export const ListContactsResponseSchema = z.object({
  contacts: z.array(
    z.object({
      id: z.uuid(),
      name: z.string(),
      email: z.email(),
      phone: z.string(),
      category_id: z.string(),
      category: z.string(),
    }),
  ),
});

export const CreateCategoryResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  message: z.string(),
});

export const UpdateCategoryResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  message: z.string(),
});

export const DeleteCategoryResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  message: z.string(),
});

export const CreateContactResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  phone: z.string().nullable(),
  category_id: z.uuid().nullable(),
  message: z.string(),
});

export const UpdateContactResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  category: z.string(),
  message: z.string(),
});

export const DeleteContactResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  message: z.string(),
});
