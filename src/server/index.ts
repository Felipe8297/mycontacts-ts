import { Hono } from 'hono';
import { makeCreateCategoryController } from '../factories/makeCreateCategoryController';
import { makeCreateContactController } from '../factories/makeCreateContactController';
import { makeDeleteCategoryController } from '../factories/makeDeleteCategoryController';
import { makeListAllCategoriesController } from '../factories/makeListAllCategoriesController';
import { makeListAllContactsController } from '../factories/makeListAllContactsController';
import { makeListCategoryByIdController } from '../factories/makeListCategoryByIdController';
import { makeUpdateCategoryController } from '../factories/makeUpdateCategoryController';
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
