"use client"
import { toast } from "sonner";

const TargetSavings = () => {

    function handleClick() {
        toast.error("This option is currently unavailable for you. Kindly contact your account officer for more information"); 
      }
      
    return ( 
        <main className="min-w-[18rem] w-[49%] bg-[#EBEBF52E] border border-[#7676801F] p-4 hover:bg-[#FBF1EC] duration-500 rounded-lg cursor-pointer" onClick={handleClick}>
            <p className="text-[#1C1F33] text-[12px] lg:text-[14px] font-medium">Target Savings</p>
            <p className="text-[10px] lg:text-[12px] text-[#B2B3BA] my-3">Save daily, weekly or monthly towards your goal. Up to 15% APY</p>
        </main>
     );
}
 
export default TargetSavings;