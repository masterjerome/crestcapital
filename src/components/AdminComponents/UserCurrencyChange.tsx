"use client"
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";

const UserCurrencyChange = ({currentCurrency, userEmail, name}: string | any) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [currency, setCurrency] = useState<string>("")

    //OnSubmit function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)

    const formData = {currency, email : userEmail}

    makeApiRequest("/changeCurrency", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false);
          setCurrency("")
          toast.success("Currency updated successfully");
          window.location.reload()
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false);
          setCurrency("")
          if (error.message === "Missing Fields") {
            toast.error("Missing fields, Kindly enter a currency.");
          }
          toast.error("Unable to update currency now, please try again later.");
          window.location.reload()
        },
      });

  }

    return ( 
        <main className="mt-8 border border-[#7676801F] px-2 md:px-4 py-6 rounded-xl text-xs md:text-sm xl:text-base">
            <div className="flex justify-between mb-4">
                <p className="text-[#06121B] font-bold text-xs md:text-sm xl:text-base capitalize">
                    {name} Current Currency
                </p>  
                <p className="text-base md:text-lg xl:text-xl text-textPrimary font-bold">{currentCurrency && currentCurrency}</p>
            </div>
            <form className="mt-10" onSubmit={onSubmit}>
                <div className="flex flex-col gap-y-1 mt-4">
                    <label htmlFor="currency"  className="text-sm lg:text-base text-[#06121B] cursor-pointer">
                      Enter New Currency Symbol
                    </label>
                    <input
                      value={currency}
                      onChange={(e: any) => setCurrency(e.target.value)}
                      required
                      placeholder="Enter Amount"
                      type="text"
                      name="currency"
                      id="currency"
                      pattern="[$€¥£]" title="Enter a valid currency symbol"
                      className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
                    />
                </div>
                    <input
                     type="submit"
                     value={loading ? "Updating Currency..." : "Update Currency"}
                     className="w-full bg-[#D56F3E] border border-[#D56F3E] hover:text-[#D56F3E] hover:bg-white duration-500 cursor-pointer mt-8 rounded-md py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg"
                    />
            </form>
        
        </main>
     );
}
 
export default UserCurrencyChange;