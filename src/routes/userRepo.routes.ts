import { Router } from 'express';
import { userRepositoryController } from '../controllers/userRepository.controller';

const routes = Router();

routes.get('/', userRepositoryController.findAll);
routes.get('/find/:id', userRepositoryController.findUniqueUser);
routes.post('/create', userRepositoryController.createUser);

export default routes;