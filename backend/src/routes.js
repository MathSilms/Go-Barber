import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Matheus de Oliveira',
    email: 'mateheusoliver@gmail.com',
    password_hash: '131231',
  });

  return res.json(user);
});

export default routes;
