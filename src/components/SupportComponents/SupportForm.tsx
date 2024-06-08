"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

const SupportForm = () => {

    const [loading, setLoading] = useState<boolean>(false)

    //Form Details
    const [enteredEmail, setEnteredEmail] = useState<string>("")
    const [enteredSubject, setEnteredSubject] = useState<string>("")
    const [enteredMessage, setEnteredMessage] = useState<string>("")

    const clearForm = () => {
        setEnteredEmail("")
        setEnteredSubject("")
        setEnteredMessage("")
    }

    //On Submit Function
    const onSubmit = (event: FormEvent) => {

        event.preventDefault()
        setLoading(true)
        const formData = {email: enteredEmail, subject: enteredSubject, message: enteredMessage }
        console.log({formData})
        makeApiRequest("/support", "post", formData, {
            onSuccess: () => {
                setLoading(false)
                toast.success("Support requested successfully.")
                clearForm()
            },
        onError: (error: any) => {
            setLoading(false)
            toast.error("Unable to request for support now, please, try again later.")
        }})
    }

    return ( 
        <main>
            <h1 className="text-[#020100] text-xl xl:text-2xl font-semibold">Contact us</h1>
            <p className="text-[#06121B] text-semibold text-xs md:text-sm xl:text-base my-4">Contact us for any issues regarding your account</p>
            <form className="text-xs md:text-sm xl:text-base mt-10" onSubmit={onSubmit}>
                <div className="flex flex-col gap-y-1">
                  <label className="cursor-pointer" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={enteredEmail}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="Enter Your Email Address"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEnteredEmail(e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-1 mt-6">
                  <label className="cursor-pointer" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    value={enteredSubject}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="Enter Your Subject"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEnteredSubject(e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-1 mt-6">
                    <label className="cursor-pointer" htmlFor="message">
                        Message
                    </label>
                    <textarea required value={enteredMessage} onChange={(e: any) =>
                        setEnteredMessage(e.target.value)
                    } className="h-20 border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none resize-none" placeholder="Enter Your Message Here" maxLength={200} name="message" id="message"></textarea>
                </div>
                <div className="flex justify-end mt-10">
                    <input type="submit" value={loading ? "Sending..." : "Send"} className="cursor-pointer bg-primary px-6 md:px-8 xl:px-10 py-2 md:py-3 text-sm md:text-base rounded-lg text-white border border-primary hover:bg-white hover:text-primary duration-500"/>
                </div>
            </form>
        </main>
     );
}
 
export default SupportForm;