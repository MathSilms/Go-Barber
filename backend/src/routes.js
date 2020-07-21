import { Router } from 'express';

// import Controllers
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';

// import Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Users

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.put('/users', authMiddleware, UserController.update);

export default routes;
