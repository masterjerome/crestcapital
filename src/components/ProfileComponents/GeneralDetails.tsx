"use client"
import { useProfileStore } from "@/store/ProfileStore";
//Import Needed Components
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import SecurityDetails from "./SecurityDetails";

const GeneralDetails = ({user}: any) => {

    const { currentDetails, updateCurrentDetails } = useProfileStore()

    //Function
    const updateDetails = (details : string) => {
        updateCurrentDetails(details)
    }

    return ( 
        <main className="flex flex-col xl:flex-row">
            <div className="xl:w-[20%] xl:h-screen xl:border-r xl:border-[#78788029] py-6">
                <div className="flex flex-row justify-between xl:justify-normal xl:flex-col gap-y-3">
                    <div className={`${currentDetails === "personal" ? "border-l-4 border-primary bg-[#FBF1EC]" : ""} p-4 group hover:bg-[#FBF1EC] hover:border-l-4 hover:border-primary h-14 cursor-pointer flex items-center justify-center duration-500`} onClick={() => updateDetails("personal")}>
                        <p className="text-[#8E8E93] text-[12px] md:text-[14px] xl:text-[16px] group-hover:text-primary duration-500">Personal Details</p>
                    </div>
                    <div className={`${currentDetails === "contact" ? "border-l-4 border-primary bg-[#FBF1EC]" : ""} p-4 group hover:bg-[#FBF1EC] hover:border-l-4 hover:border-primary h-14 cursor-pointer flex items-center justify-center duration-500`} onClick={() => updateDetails("contact")}>
                        <p className="text-[#8E8E93] text-[12px] md:text-[14px] xl:text-[16px] group-hover:text-primary duration-500">Contact Details</p>
                    </div>
                    <div className={`${currentDetails === "security" ? "border-l-4 border-primary bg-[#FBF1EC]" : ""} p-4 group hover:bg-[#FBF1EC] hover:border-l-4 hover:border-primary h-14 cursor-pointer flex items-center justify-center duration-500`} onClick={() => updateDetails("security")}>
                        <p className="text-[#8E8E93] text-[12px] md:text-[14px] xl:text-[16px] group-hover:text-primary duration-500">Security Details</p>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 md:p-4 xl:p-6">
                {currentDetails === "personal" && <PersonalDetails user={user}/>}
                {currentDetails === "contact" && <ContactDetails user={user}/>}
                {currentDetails === "security" && <SecurityDetails user={user}/>}
            </div>
        </main>
     );
}
 
export default GeneralDetails;