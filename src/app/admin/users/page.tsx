import getUsers from "@/actions/getAllUsers";

//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import Users from "@/components/AdminComponents/Users";

export const revalidate = 1;
const page = async () => {

    const users = await getUsers()

    return ( 
        <main>
            <Header page="Clients" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <Users users={users}/>
            </div>     
        </main>
     );
}
 
export default page;