import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repositories';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userRepository = new UserRepository(prisma);

export const userRepositoryController = {
    async findAll(req: Request, res: Response) {
        const user = await userRepository.findMany;
        return res.json(user);
    },
}