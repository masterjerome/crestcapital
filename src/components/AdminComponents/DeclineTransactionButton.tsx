"use client"
import { makeApiRequest } from "@/lib/apiUtils";
import { FormEvent, useState } from "react";
import { toast } from "sonner"

const DeclineTransactionButton = ({id}: any) => {
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true)
        
        const formData = { id, currentUpdate: "failed" };
        //console.log({formData})
        makeApiRequest("/modifyTransaction", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Transaction was rejected successfully..")
              setLoading(false)
              window.location.reload()
            },
            onError: (error: any) => {
              // Handle error
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
              }
              toast.error("Unable to reject transaction, try again later.")
              setLoading(false)
            },
          });
    }
    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base text-red-600 hover:underline duration-500">{loading ? "Rejecting" : "Reject"}</button>
            </form>     
        </main>
     );
}
 
export default DeclineTransactionButton;