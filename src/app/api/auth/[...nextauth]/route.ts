import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter Username" },
                password: { label: "Password", type: "password", placeholder: "Enter Password" }
            },
            async authorize(credentials, req) {
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })
                if (user && await bcrypt.compare(credentials.password, user.password)) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.TOKEN_SECRET,
    debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth({authOptions})

export {handler as GET, handler as POST}