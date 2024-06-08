"use client"
import { makeApiRequest } from "@/lib/apiUtils"
import { useState, FormEvent } from "react"
import { toast } from "sonner"

type verifyProps ={
    userEmail: string,
    userVerified: boolean,
    name: string
}
const VerifyButton = ({userEmail, userVerified, name}: verifyProps) => {


    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        toast.info(userVerified ? "Revoking user verification" : "Verifying User")
        
        const formData = { email: userEmail, currentUpdate: !userVerified };
        
        const emailData = {
          to: userEmail,
          subject: (userVerified ? "Verification Revoked" : "Verification"),
          name: name,
          emailType: (userVerified ? "revokeVerification" : "userVerification"),
        };

        makeApiRequest("/adminVerifyUser", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Client verification status was updated successfully.")
              makeApiRequest("/send-email", "post", emailData, {
                onSuccess: () => {
                  // Handle success
                  toast.success("Email was sent successfully.")
                  window.location.reload()
                },
                onError: (error: any) => {
                  // Handle error
                  toast.error("Couldn't send verification email.")
                  console.log("Couldn't send email, due to some error. " + error.message)
                },
              });
            },
            onError: (error: any) => {
              // Handle error
      
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
              }
              toast.error("Unable to verify user now, please try again later.")
            },
          });
    }
    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base border border-correctGreen bg-correctGreen rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-correctGreen duration-500">{userVerified ? "Disprove" : "Verify"}</button>
            </form>
        </main>
     );
}
 
export default VerifyButton;