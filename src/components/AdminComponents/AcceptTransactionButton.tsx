"use client"
import { makeApiRequest } from "@/lib/apiUtils";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const AcceptTransactionButton = ({id}: any) => {
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true)
        
        const formData = { id, currentUpdate: "successfull" };
        //console.log({formData})
        makeApiRequest("/modifyTransaction", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Transaction was approved successfully..")
              setLoading(false)
              window.location.reload()
            },
            onError: (error: any) => {
              // Handle error
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
              }
              toast.error("Unable to approve transaction, try again later.")
              setLoading(false)
            },
          });
    }
    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base text-green-600 hover:underline duration-500">{loading ? "Approving...." : "Approve"}</button>
            </form>
        </main>
     );
}
 
export default AcceptTransactionButton;