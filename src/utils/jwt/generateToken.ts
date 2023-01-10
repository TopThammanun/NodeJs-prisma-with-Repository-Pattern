import jwt from 'jsonwebtoken'

export const generateToken = async (payload) => {
    const token = await jwt.sign({ userID: payload.citizenId, name: payload.name }, process.env.SECRETKEY, { expiresIn: '20h' })
    return token
}