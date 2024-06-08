import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email} = body
    

    if (!email){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateUserATMStatus = await prisma.user.update({
        where: {
            email: lowercasedEmail,
        },
        data: {
            atmRequest: true,
        },
    });

    return NextResponse.json(updateUserATMStatus);

    }catch(error: any){
        console.log(error.message)
        return new NextResponse(error.message)
    }
    
}