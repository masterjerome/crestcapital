import { prisma } from "@/lib/prismadb";

export default async function getCurrency() {

  try {
    const currency = await prisma.utility.findFirst();

    return currency;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
