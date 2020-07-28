import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import Controllers
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

// import Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Users

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.put('/users', authMiddleware, UserController.update);
routes.get('/users', authMiddleware, UserController.show);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', authMiddleware, AppointmentController.store);
routes.get('/appointments', authMiddleware, AppointmentController.index);
routes.delete(
  '/appointments/:id',
  authMiddleware,
  AppointmentController.delete
);

// Providers

routes.get('/schedule', authMiddleware, ScheduleController.index);
routes.get('/notifications', authMiddleware, NotificationController.index);
routes.put('/notifications/:id', authMiddleware, NotificationController.update);

/// /////
//
//
//
//

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
