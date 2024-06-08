import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

    const body = await request.json();

    try {
        
        const {currency, email} = body;

        if (!currency || !email) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        const editCurrency = await prisma.user.update({
            where : {
                email : email,
            },
            data : {
                currency
            }
        })

        return NextResponse.json(editCurrency);

    } catch (error: any) {
        
        console.log({error})

        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }

    }

}