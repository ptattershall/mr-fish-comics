import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next-response';

const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.body.json();
    const { username, email, password, confirmPassword, source, firstName, lastName, bio } = body;
    const existing = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (existing) {
        return NextResponse.conflict('Email already exists', {status: 409})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword,
            source: source,
            firstName: firstName,
            lastName: lastName,
            bio: bio
        }
    });

    return NextResponse.json(user);
}