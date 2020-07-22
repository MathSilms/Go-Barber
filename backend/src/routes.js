import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import Controllers
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';

// import Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Users

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);
routes.put('/users', authMiddleware, UserController.update);
routes.get('/users', authMiddleware, UserController.show);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
