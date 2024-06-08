//Import Needed Components
import ChangePassword from "@/components/PasswordComponents/ChangePassword";

const page = () => {
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-white p-4 rounded-md">
                <ChangePassword />
            </div>  
        </main> 
    );
}
 
export default page;