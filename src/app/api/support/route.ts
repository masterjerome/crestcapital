import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

    const body = await request.json();

    try {
        
        const {email, subject, message} = body;

        if (!email || !subject || !message) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        const newSupport = await prisma.contact.create({
            data : {
                email,
                subject,
                message
            }
        })

        return NextResponse.json(newSupport);

    } catch (error: any) {
        
        console.log({error})

        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }

    }

}