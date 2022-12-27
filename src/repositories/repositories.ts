import { PrismaClient } from '@prisma/client'

class Repository<T> {
    private prisma: PrismaClient
    private model: any

    constructor(modelName: 'user' | 'person') {
        this.prisma = new PrismaClient()
        this.model = this.prisma[modelName]
    }

    async findAll(): Promise<T | null> {
        return this.model.findMany()
    }

    async findById(id: number): Promise<T | null> {
        return this.model.findOne({
            where: {
                userId: id
            }
        })
    }

    async findBy(field: string, value: any): Promise<T | null> {
        return this.model.findOne({
            where: {
                [field]: value
            }
        })
    }

    async create(data: any): Promise<T> {
        return this.model.create({
            data: data
        })
    }

    async update(id: number, data: any): Promise<T | null> {
        return this.model.update({
            where: {
                id: id
            },
            data: data
        })
    }

    async delete(id: number): Promise<void> {
        return this.model.delete({
            where: {
                id: id
            }
        })
    }
}

export default Repository
