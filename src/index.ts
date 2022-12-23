import dotenv from 'dotenv';
import express, { Express, Response, NextFunction, Request } from "express";
import { userRoutes, staffRoutes } from './routes';
import { rateLimit } from 'express-rate-limit';
import cors from "cors";
dotenv.config()

const app: Express = express()

const App = async () => {
    app.use(cors());
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    app.use(express.json({ limit: '50mb' }));
    app.use(rateLimit({
        windowMs: 10000,
        max: 200,
        message: "Too many requests from this IP, please try again"
    }))

    app.get('/', (_, res) => {
        res.status(200).send('OK')
    })

    app.use('/api/users', userRoutes);
    app.use('/api/staff', staffRoutes);

}

App();

export default app

