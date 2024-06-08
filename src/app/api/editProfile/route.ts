import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

        const {email, newProfileLink, newMobileNumber, newTransactionPin, page} = body

        if (!email || !page){   
          return new NextResponse('Missing Fields', { status: 400 })
        }

        if (page === "personal"){
          const updatedUser = await prisma.user.update({

            where: {
              email: email,
            },
            
            data: {
                profileImgSrc: newProfileLink
            },
          });

           return NextResponse.json(updatedUser);

        } else if (page === "contact"){
          
          const updatedUser = await prisma.user.update({

            where: {
              email: email,
            },
            
            data: {
                mobileNumber: newMobileNumber
            },
          });

        return NextResponse.json(updatedUser);

        }else if (page === "security") {


          const updatedUser = await prisma.user.update({

            where: {
              email: email,
            },
            
            data: {
              transactionPin: newTransactionPin
            },
          });

        return NextResponse.json(updatedUser);

        }

    } catch (error: any) {
      console.log(error.message)
      return new NextResponse(error.message)
    }
}
