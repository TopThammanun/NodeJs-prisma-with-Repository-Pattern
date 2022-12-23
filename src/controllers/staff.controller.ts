import prisma from '../services/prisma'
import { Request, Response } from 'express';

export const staffController = {
    async findAll(req: Request, res: Response) {
        const user = await prisma.staff.findMany();
        return res.json(user);
    }
}