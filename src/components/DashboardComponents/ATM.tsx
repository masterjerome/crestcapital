"use client"
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

//Import needed icons
import { Add } from "iconsax-react";
import ATMRequestForm from "./ATMRequestForm";

//Import Needed Images
import atmChip from "../../../public/images/atmChip.svg";
import visaLogo from "../../../public/images/visaImg.svg";
import asterik from "../../../public/images/asteriks.svg";
import two from "../../../public/images/two.svg";
import three from "../../../public/images/three.svg";
import four from "../../../public/images/four.svg";
import five from "../../../public/images/five.svg";

type atmProps = {
    hasRequested : boolean | any,
    email : string | any,
    name: string | any,
}

const ATM = ({hasRequested, email, name}: atmProps) => {
    //ATM Request Form Modal
    const [requestATM, setRequestATM] = useState<boolean>(false)
    //Functions
    const hideForm = () => {
        setRequestATM((prev) => !prev)
    }
    return ( 
    <>
        {requestATM && <ATMRequestForm hideForm={hideForm} hasPreviouslyRequested={hasRequested} email={email} name={name}/>}
        <main className="border border-[#7676801F] rounded-xl px-3 md:px-4 xl:px-6 py-6 mb-24 xl:mb-4">
            <p className="text-sm xl:text-base text-[#06121B] font-semibold">Cards</p>
            <div className="overflow-x-auto special pb-4 mt-6 flex gap-x-5">
                {hasRequested && 
                <div style={{ background: 'linear-gradient(31.58deg, #592F1A -2.49%, #191C2E 67.92%)' }} className="p-6 min-w-[252px] w-[252px] h-40 rounded-2xl cursor-pointer" onClick={() => toast.info("Your Debit card details is currently unavailable.")}>
                    <div className="flex justify-between items-center">
                            <Image src={atmChip} alt=""/> 
                            <Image src={visaLogo} alt=""/> 
                    </div> 
                    <div className="flex gap-x-2 mt-6">
                       <div className="flex gap-x-[2px]">
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                        </div>
                        <div className="flex gap-x-[2px]">
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                        </div>
                        <div className="flex gap-x-[2px]">
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                            <Image src={asterik} alt=""/>
                        </div>
                        <div className="flex gap-x-[2px]">
                            <Image src={two} alt=""/>
                            <Image src={three} alt=""/>
                            <Image src={four} alt=""/>
                            <Image src={five} alt=""/>
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div className="flex flex-col">
                            <p className="text-[0.65rem]">Card Holder Name</p>
                            <p className="">*********</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[0.65rem]">Expiry Date</p>
                            <p className="">01/27</p>
                        </div>
                    </div> 
                </div>
                }
                <div className="min-w-[252px] w-[252px] h-40 bg-[#EBEBF52E] rounded-2xl flex flex-col items-center justify-center border border-[#E8E9EB]">
                    <div onClick={hideForm} className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-[#B9BAC0] flex items-center justify-center rounded-[50%] cursor-pointer hover:bg-secondary duration-500">
                        <Add size="16" color="#FFF"/>
                    </div>
                    <p className="text-[8px] md:text-[10px] xl:text-[12px] font-medium text-secondary">Add a card</p>
                </div>
            </div>
        </main>
    </>
);
}
 
export default ATM;




