import { Router } from 'express';
import { registerController } from '../controllers/register.controller'
import { loginController } from '../controllers/login.controller'
import { validationRegister } from '../middleware/validation/register'
import { auth } from '../middleware/auth/auth'

const routes = Router();

routes.post('/register', validationRegister, registerController)
routes.post('/login', loginController)

routes.get('/secret', auth, (req: any, res) => {
    const data = req.jwtObject
    console.log(data);
    return res.status(200).send({
        message: 'user data',
        data
    })
})

export default routes;