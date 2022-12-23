import { Router } from 'express';
import { staffController } from '../controllers/staff.controller';

const routes = Router();

routes.get('/', staffController.findAll);

export default routes;