import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', (req, res) => {
  UserController.store(req, res);
});

routes.post('/sessions', (req, res) => {
  SessionController.store(req, res);
});

routes.use(authMiddleware);

routes.put('/users', (req, res) => {
  UserController.update(req, res);
})

export default routes;
