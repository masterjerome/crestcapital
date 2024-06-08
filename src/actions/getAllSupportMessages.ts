import { prisma } from "@/lib/prismadb";

export default async function getSupportMessages() {

  try {
    const getSupportMessages = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return getSupportMessages;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
