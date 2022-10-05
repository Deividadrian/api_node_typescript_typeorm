import { OvmController } from './controllers/OvmController';
import { ProductController } from './controllers/ProductController';
import { ClientController } from './controllers/ClienteController';
import { Router } from 'express';

const routes = Router();

routes.post('/client', new ClientController().create);
routes.post('/product', new ProductController().create);
routes.post('/ovm', new OvmController().create);

export default routes;