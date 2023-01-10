import { users } from "@prisma/client"

interface IUserRepo {
    create: (user: users) => Promise<users>
}

export { IUserRepo }