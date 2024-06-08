import  bcrypt  from 'bcrypt';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

  const body = await request.json();

  try {

    const { 
        accountNumber, 
        firstName, 
        lastName, 
        email, 
        password, 
        dateOfBirth, 
        profileImgSrc, 
        country, 
        city, 
        state, 
        address, 
        mobileNumber, 
        idType, 
        idNumber, 
        transactions,
        dateOfExpiry, 
        idCardFrontImgSrc, 
        idCardBackImgSrc,
      } = body;

    const lowercasedEmail = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: lowercasedEmail,
      },
    });

    const existingAccountNumber = await prisma.user.findUnique({
      where: {
        accountNumber: accountNumber,
      },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    if (existingAccountNumber) {
      console.log("Account Number Already Exists")
      throw new Error('Something Went Wrong');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({

      data: {
        email: lowercasedEmail,
        hashedPassword,
        accountNumber, 
        firstName, 
        lastName, 
        dateOfBirth, 
        profileImgSrc, 
        country, 
        city, 
        state, 
        address, 
        mobileNumber, 
        idType, 
        idNumber,
        transactions,
        dateOfExpiry, 
        idCardFrontImgSrc, 
        idCardBackImgSrc
      },
    });

    return NextResponse.json(user);
    
    } catch (error) {
      
      console.log({error})

    if (error instanceof Error) {
      return new NextResponse(error.message, { status: determineStatusCode(error.message),});
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }

function determineStatusCode(errorMessage: string): number {
  switch (errorMessage) {
    case 'Email already exists':
      return 409;
    case "Something Went Wrong":
      return 400;
    default:
      return 500;
  }
}
}