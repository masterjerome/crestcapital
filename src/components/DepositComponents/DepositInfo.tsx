import Link from "next/link";
//Import Needed Icons
import { ArchiveTick, Bank } from "iconsax-react";

const DepositInfo = () => {
    return ( 
        <main className="bg-[#EBEBF52E] border border-[#7676801F] rounded-lg p-4 mt-10">
            <div className="flex gap-x-2 items-center">
                <div className="p-2 md:p-4 bg-primary rounded-[50%]">
                    <Bank size="20" color="#161618"/>
                </div>
                <div>
                   <p className="text-sm md:text-base xl:text-lg font-bold text-textPrimary">Deposit Via Bank Transfer</p>
                   <p className="text-[12px] md:text-[14px] xl:text-[16px] text-[#8E8E93]">FREE Instant bank funding within 10s</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-3 text-xs md:text-sm xl:text-base text-[#8E8E93] mt-10">
                <p className="text-sm md:text-base xl:text-lg font-bold text-textPrimary">In Four(4) Steps</p>
                <div className="flex gap-x-1 items-center"><ArchiveTick size="16" color="#D56F3E" className="shrink-0"/><p>Copy your account details.</p></div>
                <div className="flex gap-x-1 items-center"><ArchiveTick size="16" color="#D56F3E" className="shrink-0"/><p>Login to your other bank account online, and navigate to the funds transfers and payments page.</p></div>
                <div className="flex gap-x-1 items-center"><ArchiveTick size="16" color="#D56F3E" className="shrink-0"/><p>Initiate a deposit transfer of your desired amount and input the copied account details.</p></div>
                <div className="flex gap-x-1 items-center"><ArchiveTick size="16" color="#D56F3E" className="shrink-0"/><p><b>Confirm Transfer</b></p></div>
            </div>
            <p className="text-xs md:text-sm xl:text-base mt-8">Having an issue? <Link href="/user/support" className="text-bold text-primary">Contact Us</Link></p>
        </main>
     );
}
 
export default DepositInfo;