import BaseRepository from './repositories';
import User from '../models/user.model';
import { PrismaClient } from '@prisma/client';

export default class UserRepository extends BaseRepository<User> {
    constructor(prisma: PrismaClient) {
        super(prisma, 'user');
    }
}