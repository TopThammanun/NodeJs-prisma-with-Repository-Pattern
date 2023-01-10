import { UserRepo } from "../repositories/implementation/UserRepository"
import { PrismaClient, users } from '@prisma/client';

export const registerController = async (req, res) => {

    const { userId, name, citizenId, password } = req.body
    const saveUser: users = {
        userId,
        name,
        citizenId,
        password,
    }

    const db = await new UserRepo()

    if (await db.findUser(citizenId)) {
        return res.status(400).send({
            message: 'user already exist.'
        })
    }

    const user = await db.create(saveUser)

    return res.status(200).send({ user: user })

}
