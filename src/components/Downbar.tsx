import Link from "next/link";
import { usePathname } from "next/navigation";


//Import Needed Icons
import { ArrowSwapHorizontal, Chart2, Element3, I24Support, WalletMoney } from "iconsax-react";


const Downbar = () => {
    const pathName = usePathname()

    return ( 
        <main className="lg:hidden">
            <div className="text-[#8E8E93] fixed bottom-0 py-4 px-2 bg-white downbarShadow w-full flex gap-x-2 justify-between text-center z-[99999]">
                <Link href="/user/dashboard" className={`${pathName === "/user/dashboard" ? "text-sidebarHover" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <Element3 size={20}/>
                    Home
                </Link> 
                <Link href="/user/transfer" className={`${pathName === "/user/transfer" ? "text-sidebarHover" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <ArrowSwapHorizontal size={20}/>
                    Transfer
                </Link>   
                <Link href="/user/history" className={`${pathName === "/user/history" ? "text-sidebarHover" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <Chart2 size={20}/>
                    History
                </Link>  
                <Link href="/user/savings" className={`${pathName === "/user/savings" ? "text-sidebarHover" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <WalletMoney size={20}/>
                    Savings
               </Link>  
                <Link href="/user/support" className={`${pathName === "/user/support" ? "text-sidebarHover" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <I24Support size={20}/>
                    Support
                </Link>  
            </div>
        </main>
     );
}
 
export default Downbar;