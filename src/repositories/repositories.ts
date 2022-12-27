import { PrismaClient } from '@prisma/client'
import { Model } from '@prisma/client/index'

class Repository<T> {
    private prisma: PrismaClient
    private model: Model<T>

    constructor(modelName: string) {
        this.prisma = new PrismaClient()
        this.model = this.prisma[modelName] as Model<T>
    }

    async findAll(): Promise<T[] | null> {
        return this.model.findMany()
    }

    async findById(id: number): Promise<T | null> {
        return this.model.findOne({
            where: {
                id: id
            }
        })
    }

    async findBy(field: keyof T, value: any): Promise<T | null> {
        return this.model.findOne({
            where: {
                [field]: value
            }
        })
    }

    async create(data: T): Promise<T> {
        return this.model.create({
            data: data
        })
    }

    async update(id: number, data: T): Promise<T | null> {
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
