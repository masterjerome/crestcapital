import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email, currentUpdate} = body
    

    if (!email){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateUserVerification = await prisma.user.update({
        where: {
            email: lowercasedEmail,
        },
        data: {
            isVerified: currentUpdate,
        },
    });

    return NextResponse.json(updateUserVerification);

    }catch(error: any){
        console.log(error.message)
        return new NextResponse(error.message)
    }
    
}