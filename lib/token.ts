import { v4 } from 'uuid'
import prisma from './prisma'
import { TokenType } from '@prisma/client'

interface TokenPayload {
    email: string
    [key: string]: unknown
}

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
    payload: TokenPayload,
    expiresIn: string
): Promise<string> => {
    const { email, ...payloadWithoutEmail } = payload

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
            payload: JSON.parse(JSON.stringify(payloadWithoutEmail)),
            identifier,
            expiresAt: new Date(Date.now() + parseDurationToMs(expiresIn))
        }
    })

    return identifier
}

const resolve = async <T = any>(identifier: string): Promise<null | T> => {
    const token = await prisma.token.findUnique({
        where: { identifier }
    })

    if (token) {
        if (token.expiresAt > new Date()) {
            if (token.type !== TokenType.Session) {
                await prisma.token.delete({
                    where: { identifier }
                })
            }

            return {
                email: token.email,
                ...JSON.parse(JSON.stringify(token.payload))
            }
        } else {
            await prisma.token.delete({
                where: { identifier }
            })
        }
    }

    return null
}

export default {
    generate,
    resolve
}
