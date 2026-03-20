import { Hono } from 'hono';

import { makeCreateCategoryController } from '../factories/category/makeCreateCategoryController';
import { makeDeleteCategoryController } from '../factories/category/makeDeleteCategoryController';
import { makeListAllCategoriesController } from '../factories/category/makeListAllCategoriesController';
import { makeListCategoryByIdController } from '../factories/category/makeListCategoryByIdController';
import { makeUpdateCategoryController } from '../factories/category/makeUpdateCategoryController';
import { makeCreateContactController } from '../factories/contact/makeCreateContactController';
import { makeListAllContactsController } from '../factories/contact/makeListAllContactsController';

import { makeListContactByIdController } from '../factories/contact/makeListContactByIdController';

import { makeDeleteContactController } from '../factories/contact/makeDeleteContactController';
import { makeUpdateContactController } from '../factories/contact/makeUpdateContactController';
import { routeAdapter } from './adapters/routeAdapter';

const app = new Hono();

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

app.get('/contacts', routeAdapter(listAllContactsController));

app.post('/categories', routeAdapter(createCategoryController));
app.get('/categories', routeAdapter(listAllCategoriesController));
app.get('/categories/:id', routeAdapter(listCategoryByIdController));
app.put('/categories/:id', routeAdapter(updateCategoryController));
app.delete('/categories/:id', routeAdapter(deleteCategoryController));

app.post('/contacts', routeAdapter(createContactController));
app.get('/contacts/:id', routeAdapter(listContactByIdController));
app.put('/contacts/:id', routeAdapter(updateContactController));
app.delete('/contacts/:id', routeAdapter(deleteContactController));

export default app;
