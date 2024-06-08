import getSupportMessages from "@/actions/getAllSupportMessages";

//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import AllSupport from "@/components/AdminComponents/AllSupport";

const page = async () => {

    const messages = await getSupportMessages()

    return ( 
        <main>
            <Header page="Administration Support" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <AllSupport messages={messages}/>
            </div>
        </main>
     );
}
 
export default page;