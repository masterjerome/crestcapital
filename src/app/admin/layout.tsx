import Sidebar from "@/components/Sidebar";
import '../globals.css';
import { Toaster } from 'sonner';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions";
import getCurrentLoggedInAdmin from '@/actions/getCurrentAdmin';
import { permanentRedirect } from "next/navigation";


export default async function AdminLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (session?.user){ 
    const loggedInEmail = (session?.user.email)
    const currentUser = await getCurrentLoggedInAdmin(loggedInEmail)
    //console.log({currentUser})
    if (currentUser?.role !== "admin" && currentUser?.role !== "super_admin") {
      permanentRedirect('/not-authorized')
    }
  return (

      <section>
      <Sidebar role={currentUser?.role}/>
        <section className="mainWidth">{children}</section>
        <Toaster richColors position="top-center" closeButton />
      </section>

  )
  }
}