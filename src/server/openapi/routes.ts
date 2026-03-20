import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono, createRoute } from '@hono/zod-openapi';
import { makeCreateCategoryController } from '../../factories/category/makeCreateCategoryController';
import { makeDeleteCategoryController } from '../../factories/category/makeDeleteCategoryController';
import { makeListAllCategoriesController } from '../../factories/category/makeListAllCategoriesController';
import { makeListCategoryByIdController } from '../../factories/category/makeListCategoryByIdController';
import { makeUpdateCategoryController } from '../../factories/category/makeUpdateCategoryController';
import { makeCreateContactController } from '../../factories/contact/makeCreateContactController';
import { makeDeleteContactController } from '../../factories/contact/makeDeleteContactController';
import { makeListAllContactsController } from '../../factories/contact/makeListAllContactsController';
import { makeListContactByIdController } from '../../factories/contact/makeListContactByIdController';
import { makeUpdateContactController } from '../../factories/contact/makeUpdateContactController';
import { routeAdapter } from '../adapters/routeAdapter';
import {
  CategorySchema,
  ContactByIdSchema,
  CreateCategoryBodySchema,
  CreateCategoryResponseSchema,
  CreateContactBodySchema,
  CreateContactResponseSchema,
  DeleteCategoryResponseSchema,
  DeleteContactResponseSchema,
  ErrorSchema,
  IdParamSchema,
  ListCategoriesResponseSchema,
  ListContactsResponseSchema,
  MessageSchema,
  UpdateCategoryBodySchema,
  UpdateCategoryResponseSchema,
  UpdateContactBodySchema,
  UpdateContactResponseSchema,
} from './schemas';

const app = new OpenAPIHono();

const createCategoryController = makeCreateCategoryController();
const listAllCategoriesController = makeListAllCategoriesController();
const listCategoryByIdController = makeListCategoryByIdController();
const updateCategoryController = makeUpdateCategoryController();
const deleteCategoryController = makeDeleteCategoryController();

const createContactController = makeCreateContactController();
const listAllContactsController = makeListAllContactsController();
const listContactByIdController = makeListContactByIdController();
const updateContactController = makeUpdateContactController();
const deleteContactController = makeDeleteContactController();

const createCategoryRoute = createRoute({
  method: 'post',
  path: '/categories',
  request: {
    body: {
      content: {
        'application/json': { schema: CreateCategoryBodySchema },
      },
    },
  },
  responses: {
    201: { description: 'Category created', content: { 'application/json': { schema: CreateCategoryResponseSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    500: { description: 'Server error', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const listAllCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  responses: {
    200: { description: 'Categories list', content: { 'application/json': { schema: ListCategoriesResponseSchema } } },
    500: { description: 'Server error', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const listCategoryByIdRoute = createRoute({
  method: 'get',
  path: '/categories/{id}',
  request: {
    params: IdParamSchema,
  },
  responses: {
    200: { description: 'Category found', content: { 'application/json': { schema: CategorySchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const updateCategoryRoute = createRoute({
  method: 'put',
  path: '/categories/{id}',
  request: {
    params: IdParamSchema,
    body: {
      content: {
        'application/json': { schema: UpdateCategoryBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Category updated', content: { 'application/json': { schema: UpdateCategoryResponseSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const deleteCategoryRoute = createRoute({
  method: 'delete',
  path: '/categories/{id}',
  request: {
    params: IdParamSchema,
  },
  responses: {
    200: { description: 'Category deleted', content: { 'application/json': { schema: DeleteCategoryResponseSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: { description: 'Server error', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const createContactRoute = createRoute({
  method: 'post',
  path: '/contacts',
  request: {
    body: {
      content: {
        'application/json': { schema: CreateContactBodySchema },
      },
    },
  },
  responses: {
    201: { description: 'Contact created', content: { 'application/json': { schema: CreateContactResponseSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    500: { description: 'Server error', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const listAllContactsRoute = createRoute({
  method: 'get',
  path: '/contacts',
  responses: {
    200: { description: 'Contacts list', content: { 'application/json': { schema: ListContactsResponseSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: MessageSchema } } },
  },
});

const listContactByIdRoute = createRoute({
  method: 'get',
  path: '/contacts/{id}',
  request: {
    params: IdParamSchema,
  },
  responses: {
    200: { description: 'Contact found', content: { 'application/json': { schema: ContactByIdSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const updateContactRoute = createRoute({
  method: 'put',
  path: '/contacts/{id}',
  request: {
    params: IdParamSchema,
    body: {
      content: {
        'application/json': { schema: UpdateContactBodySchema },
      },
    },
  },
  responses: {
    200: { description: 'Contact updated', content: { 'application/json': { schema: UpdateContactResponseSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

const deleteContactRoute = createRoute({
  method: 'delete',
  path: '/contacts/{id}',
  request: {
    params: IdParamSchema,
  },
  responses: {
    200: { description: 'Contact deleted', content: { 'application/json': { schema: DeleteContactResponseSchema } } },
    400: { description: 'Validation error', content: { 'application/json': { schema: ErrorSchema } } },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
    500: { description: 'Server error', content: { 'application/json': { schema: ErrorSchema } } },
  },
});

app.openapi(createCategoryRoute, routeAdapter(createCategoryController) as any);
app.openapi(listAllCategoriesRoute, routeAdapter(listAllCategoriesController) as any);
app.openapi(listCategoryByIdRoute, routeAdapter(listCategoryByIdController) as any);
app.openapi(updateCategoryRoute, routeAdapter(updateCategoryController) as any);
app.openapi(deleteCategoryRoute, routeAdapter(deleteCategoryController) as any);

app.openapi(createContactRoute, routeAdapter(createContactController) as any);
app.openapi(listAllContactsRoute, routeAdapter(listAllContactsController) as any);
app.openapi(listContactByIdRoute, routeAdapter(listContactByIdController) as any);
app.openapi(updateContactRoute, routeAdapter(updateContactController) as any);
app.openapi(deleteContactRoute, routeAdapter(deleteContactController) as any);

app.doc('/openapi.json', {
  openapi: '3.0.0',
  info: {
    title: 'MyContacts API',
    version: '1.0.0',
  },
});

app.get('/docs', swaggerUI({ url: '/openapi.json' }));

export default app;
