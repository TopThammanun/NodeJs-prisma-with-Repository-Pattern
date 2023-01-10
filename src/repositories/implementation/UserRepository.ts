import { IUserRepo } from "../IUsersRepository"
import { PrismaClient, users } from '@prisma/client';
import { hash } from 'bcrypt'

class UserRepo implements IUserRepo {
    create = async (user: users) => {
        const prisma = new PrismaClient()
        await prisma.users.create({
            data: {
                name: user.name,
                citizenId: user.citizenId,
                password: await hash(user.password.toString(), 10)
            }
        })
        return user
    }

    findUser = async (citizenId: string) => {
        const prisma = new PrismaClient()
        const user = await prisma.users.findUnique({
            where: {
                citizenId,
            }
        })
        return user
    }
}

export { UserRepo }
