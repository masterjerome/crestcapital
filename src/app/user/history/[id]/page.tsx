import Link from "next/link";
import { jsPDF } from "jspdf";

//Import Needed Providers
import { getUserDetails } from "@/providers/userDetails";

//Import Needed Utils
import { formatDate } from "@/lib/dateTimeUtils";
import { formatDateTime } from "@/lib/dateTimeUtils";
import getIndividualTransaction from "@/actions/getIndividualTransaction";

//Import Needed Components
import PDFButton from "@/components/HistoryComponents/pdfButton";

//Import Icons
import { AddCircle } from "iconsax-react";



export const revalidate = 0;
const page = async ({ params }: { params: { id: string } }) => {
  
  const transactionId = params.id;
  const transactionInformation = await getIndividualTransaction(transactionId);
  const { user } = await getUserDetails();
  const currentCurrency = user?.currency 

  function showCorrectTransactionType(type: string | undefined): string {
    switch (type) {
      case "Deposit":
        return "Deposit";
        break;
      case "Withdrawal":
        return "Withdrawal";
        break;
    case "Target_Saving":
        return "Target Savings";
        break;
    case "Capital_Wealth":
        return "Keystone Wealth";
        break;
    case "Utility_Bill":
        return "Utility Bill";
        break;
    case "Domestic_Wire_Transfer":
        return "Domestic Wire Transfer";
        break;
    case "International_Wire_Transfer":
        return "International Wire Transfer";
        break;
    default:
        return "Unavailable";
      break;
    }
  }
  //PDF code
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Transaction Details", 10, 10);
    // Add transaction details to the PDF using doc.text or doc.autoTable

    // Save the PDF
    doc.save("transaction_details.pdf");
  };

  // Attach the exportPDF function to the window object
  if (typeof window !== "undefined") {
    (window as any).exportPDF = exportPDF;
  }
  //console.log({transactionInformation})

  return (
    <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-2 sm:p-4 md:p-6 xl:p-8 bg-white flex flex-col gap-y-3 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="tex-base md:text-xl xl:text-2xl text-[#020100] font-semibold mt-4">
            Transaction details
          </p>
          <Link href="/user/history"><AddCircle size="32" variant="Bold" className="rotate-45 text-primary"/></Link>
        </div>

        <div className="flex justify-between items-center gap-x-5">
          <p className="text-[#9EA0A3] text-xs md:text-sm">
            Transaction Status
          </p>
          <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
            {transactionInformation?.status === "successfull" ? "successful" : transactionInformation?.status}
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <p className="text-[#9EA0A3] text-xs md:text-sm">Transaction Type</p>
          <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
            {showCorrectTransactionType(transactionInformation?.type)}
          </p>
        </div>
        {transactionInformation?.type === "Deposit" && 
          <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                From 
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                {transactionInformation?.targetBankName}
            </p>
          </div>
        }
        <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                Amount 
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
              {currentCurrency ?? "$"}{transactionInformation?.amount.toLocaleString()}
            </p>
        </div> 
        {transactionInformation?.description && 
          <div className="flex justify-between items-center gap-x-5">
            <p className="text-[#9EA0A3] text-xs md:text-sm">
                Transaction Info 
            </p>
            <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                {transactionInformation?.description}
            </p>
          </div>
        }
        {(transactionInformation?.type === "Domestic_Wire_Transfer" || transactionInformation?.type === "International_Wire_Transfer") && 
        <>
           <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Account Name 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {transactionInformation.targetName}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Account Number 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {transactionInformation.targetAccount?.slice(0, 4)}******
                </p>
            </div>
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Bank Name 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {transactionInformation.targetBankName}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Recipient Bank Address 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {transactionInformation.bankAddress}
                </p>
            </div> 
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Routing Number 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {transactionInformation.routingNumber?.slice(0,4)}*****
                </p>
            </div>
            <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">
                    Transaction Fee 
                </p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {currentCurrency ?? "$"}{transactionInformation.transferFee}
                </p>
            </div>
        </>
        }
        
        {transactionInformation?.isSaveBox && 
            <>
               <div className="flex justify-between items-center gap-x-5">
                    <p className="text-[#9EA0A3] text-xs md:text-sm">
                        Used Savebox Option
                    </p>
                    <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                      Yes
                    </p>
                </div>  
                <div className="flex justify-between items-center gap-x-5">
                    <p className="text-[#9EA0A3] text-xs md:text-sm">
                        Savebox Amount
                    </p>
                    <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                        €{transactionInformation.saveBoxAmount}
                    </p>
            </div>          
            </>
        }
           <div className="flex justify-between items-center gap-x-5">
                <p className="text-[#9EA0A3] text-xs md:text-sm">Date</p>
                <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
                  {transactionInformation?.doneByAdmin ? formatDateTime(transactionInformation?.customCreatedTime ?? "") : formatDate(transactionInformation?.createdAt ?? new Date)} 
                </p>
         </div> 
        
        <div className="flex justify-between items-center gap-x-5 mb-4">
          <p className="text-[#9EA0A3] text-xs md:text-sm">Transaction ID</p>
          <p className="text-[#06121B] font-medium text-sm md:text-base capitalize text-right">
            {transactionInformation?.id}
          </p>
        </div>
        <div className="mt-4">
          <PDFButton clickFunction={exportPDF}/>
        </div>
      </div>
    </main>
  );
};

export default page;
