"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


type SideBarLinks = {
    route: string,
    label: string,
    icon: React.ReactNode,
}

const SidebarLinks = ({route, label,icon}:SideBarLinks) => {
    const pathName = usePathname()

    return ( 
            <Link
                href={route}
                prefetch
                className={`${pathName === route ? "text-sidebarText bg-sidebarHover" : "text-textWhite"} flex items-center gap-x-2 px-6 py-4 text-sm duration-500 hover:bg-sidebarHover hover:text-sidebarText active:text-sidebarText md:text-base`}
            >{icon}{label}</Link>
     );
}
 
export default SidebarLinks; 