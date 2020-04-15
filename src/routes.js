import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController'

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', (req, res) => {
  UserController.store(req, res);
});

routes.post('/sessions', (req, res) => {
  SessionController.store(req, res);
});

routes.use(authMiddleware);

routes.put('/users', (req, res) => {
  UserController.update(req, res);
});

  routes.post('/files', upload.single('file'), (req, res) => {
    FileController.store(req, res);
  });
// routes.post('/files', upload.single('file'), (req, res) => {
//   return res.json(req.file)
// });

export default routes;
