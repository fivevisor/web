import { v4 } from 'uuid'
import prisma from './prisma'
import type { TokenType } from '@prisma/client'

const parseDurationToMs = (duration: string): number => {
    let total = 0
    const regex = /(\d+)([smhd])/g

    const units = {
        s: 1000,
        m: 60 * 1000,
        h: 60 * 60 * 1000,
        d: 24 * 60 * 60 * 1000
    }

    let match

    while ((match = regex.exec(duration)) !== null) {
        const value = parseInt(match[1])
        const unit = match[2] as keyof typeof units

        if (units[unit]) {
            total += value * units[unit]
        }
    }

    return total
}

const generate = async (
    type: TokenType,
    email: string,
    expiresIn: string
): Promise<string> => {
    await prisma.token.deleteMany({
        where: { type, email }
    })

    let identifier: string

    do {
        identifier = v4()
    } while (
        await prisma.token.findUnique({
            where: {
                identifier
            }
        })
    )

    await prisma.token.create({
        data: {
            type,
            email,
            identifier,
            expiresAt: new Date(Date.now() + parseDurationToMs(expiresIn))
        }
    })

    return identifier
}

const resolve = async (identifier: string): Promise<undefined | string> => {
    const token = await prisma.token.findUnique({
        where: { identifier }
    })

    if (token && token.expiresAt > new Date()) {
        await prisma.token.delete({
            where: { identifier }
        })

        return token.email
    }
}

export default {
    generate,
    resolve
}
