import { Router } from 'express';
import { userRepositoryController } from '../controllers/userRepository.controller';

const routes = Router();

routes.get('/', userRepositoryController.findAll);

export default routes;