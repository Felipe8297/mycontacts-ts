import { Hono } from 'hono';
import { makeCreateCategoryController } from '../factories/category/makeCreateCategoryController';
import { makeDeleteCategoryController } from '../factories/category/makeDeleteCategoryController';
import { makeListAllCategoriesController } from '../factories/category/makeListAllCategoriesController';
import { makeListCategoryByIdController } from '../factories/category/makeListCategoryByIdController';
import { makeUpdateCategoryController } from '../factories/category/makeUpdateCategoryController';
import { makeCreateContactController } from '../factories/contact/makeCreateContactController';
import { makeListAllContactsController } from '../factories/contact/makeListAllContactsController';
import { routeAdapter } from './adapters/routeAdapter';

const app = new Hono();

const listAllContactsController = makeListAllContactsController();
const createCategoryController = makeCreateCategoryController();
const listAllCategoriesController = makeListAllCategoriesController();
const listCategoryByIdController = makeListCategoryByIdController();
const updateCategoryController = makeUpdateCategoryController();
const deleteCategoryController = makeDeleteCategoryController();

const createContactController = makeCreateContactController();

app.get('/contacts', routeAdapter(listAllContactsController));

app.post('/categories', routeAdapter(createCategoryController));
app.get('/categories', routeAdapter(listAllCategoriesController));
app.get('/categories/:id', routeAdapter(listCategoryByIdController));
app.put('/categories/:id', routeAdapter(updateCategoryController));
app.delete('/categories/:id', routeAdapter(deleteCategoryController));

app.post('/contacts', routeAdapter(createContactController));

export default app;
