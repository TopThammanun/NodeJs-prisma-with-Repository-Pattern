import prisma from '../services/prisma'
import { Request, Response } from 'express';

export const userController = {
    async findAll(req: Request, res: Response) {
        const user = await prisma.user.findMany();
        return res.json(user);
    },
    async createUser(req: Request, res: Response) {
        const userData = req.body;
        const user = await prisma.user.create({
            data: {
                userName: userData.userName,
                password: userData.password,
                citizenId: userData.citizenId,
            }
        });
        return res.json({ user: user });
    },
    async findUniqueUser(req: Request, res: Response) {
        const paramsId = req.params.id;
        const uniqueUser = await prisma.user.findUnique({
            where: {
                userId: paramsId
            }
        })
        return res.json({ uniqueUser: uniqueUser });
    },
    async updateUser(req: Request, res: Response) {
        const paramId = req.params.id;
        const data = req.body;
        const updateUser = await prisma.user.update({
            data: {
                userName: data.userName,
                password: data.password
            },
            where: {
                userId: paramId
            }
        })
        return res.json({ updateUser: updateUser });
    },
    async deleteUser(req: Request, res: Response) {
        const paramId = req.params.id
        const deleteUser = await prisma.user.delete({
            where: {
                userId: paramId
            }
        })
        return res.json({ deleteUser: deleteUser });
    }
}