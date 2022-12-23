import prisma from '../services/prisma'
import { Request, Response } from 'express';
import Repository from '../repository/repository';

const userRepo = new Repository('user');

export const userRepositoryController = {
    async findAll(req: Request, res: Response) {
        const user = await userRepo.findAll();
        return res.json(user);
    },
    async findUniqueUser(req: Request, res: Response) {
        const paramsId = req.params.id;
        const uniqueUser = await userRepo.findById(paramsId);
        return res.json({ uniqueUser: uniqueUser });
    },
    async createUser(req: Request, res: Response) {
        const userData = req.body;
        const user = await userRepo.create({
            userName: userData.userName,
            password: userData.password,
            citizenId: userData.citizenId,
        });
        return res.json({ user: user });
    },

}