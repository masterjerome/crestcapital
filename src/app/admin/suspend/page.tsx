import getSuspendedUser from "@/actions/getAllSuspendedUsers";

//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import SuspendedUsers from "@/components/AdminComponents/SuspendedUsers";

const page = async () => {

    const suspendedUsers = await getSuspendedUser()
    
    return ( 
        <main>
            <Header page="Administration Suspension" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <SuspendedUsers suspendedUsers={suspendedUsers}/>
            </div>
        </main>
     );
}
 
export default page;