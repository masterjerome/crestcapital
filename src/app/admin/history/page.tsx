import getTransactions from "@/actions/getAllTransactions";
import getCurrency from "@/actions/getCurrency";
//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import AllTransactions from "@/components/AdminComponents/AllTransactions";


export const revalidate = 1;
const page = async () => {

    const transactions = await getTransactions();
    const currency = await getCurrency()
    const currentCurrency = currency?.currentCurrency

    return ( 
        <main>
           <Header page="Administration History" /> 
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <AllTransactions transactions={transactions} currentCurrency={currentCurrency}/>
            </div>
        </main>
     );
}
 
export default page;