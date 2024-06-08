import { Import, Send2 } from "iconsax-react";

const Activity = ({wireTransfer, deposits} : any) => {
    return ( 
        <main className="h-52 border border-[#7676801F] rounded-xl px-3 md:px-4 xl:px-6 py-6">
            <p className="text-sm lg:text-base text-[#06121B] font-semibold">Your Activity</p>
            <div className="flex justify-between mt-10">
                <div className="w-[49%] border border-[#7676801F] h-24 rounded-lg bg-[#F3F6FB] flex items-center gap-x-2 p-2 sm:p-4 xl:p-6">
                    <div className="size-10 md:size-12 xl:size-14 rounded-[50%] bg-white border border-[#78788029] flex items-center justify-center">
                        <Send2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]" color="#06121B"/>
                    </div>
                    <div>
                        <p className="text-[0.6rem] md:text-xs">Transfers</p>
                        <p className="font-medium text-xl text-[#06121B] mt-1">{wireTransfer && wireTransfer.length}</p>
                    </div>
                </div>
                <div className="w-[49%] border border-[#7676801F] h-24 rounded-lg bg-[#F3F6FB] flex items-center gap-x-2 p-2 sm:p-4 xl:p-6">
                    <div className="size-10 md:size-12 xl:size-14 rounded-[50%] bg-white border border-[#78788029] flex items-center justify-center">
                        <Import className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]" color="#06121B"/>
                    </div>
                    <div>
                        <p className="text-[0.6rem] md:text-xs">Deposits</p>
                        <p className="font-medium text-xl text-[#06121B] mt-1">{deposits && deposits.length}</p>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Activity;