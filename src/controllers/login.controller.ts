import { UserRepo } from "../repositories/implementation/UserRepository"
import { compare } from 'bcrypt'
import { generateToken } from "../utils/jwt/generateToken"

export const loginController = async (req, res) => {
    const { citizenId, password } = req.body
    const user = await new UserRepo().findUser(citizenId)

    if (!user) {
        return res.status(200).send({
            message: 'citizenId or password invalid.'
        })
    }

    const passwordCompare = await compare(password.toString(), user.password)
    if (!passwordCompare) {
        return res.status(200).send({
            message: 'email or password invalid.'
        })
    }

    const token = await generateToken(user)

    return res.status(200).send({ token })
}