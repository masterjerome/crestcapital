import { formatDateLong } from "@/lib/dateTimeUtils";


const AllSupport = ({messages}: any) => {
    return ( 
        <main className="border border-[#7676801F] rounded-xl p-4">
            <p className="text-xs md:text-sm xl:text-base text-secondary font-bold">All Support Messages</p>
            <div className="overflow-y-auto special max-h-screen mb-24 lg:mb-0 flex flex-col gap-y-3 mt-10">
            {messages &&
            messages.map((message: any) => (

                <div key={message.id} className="flex flex-col gap-y-0.5 border-b border-[#7676801F] p-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                       <p className="text-[#9EA0A3] text-xs md:text-sm xl:text-base font-medium">{message.email}</p> 
                       <p className="text-[10px] md:text-[12px] xl:text-[14px] text-[#9EA0A3]">{formatDateLong(message.createdAt)}</p>
                    </div>
                    
                    <p className="text-[#161618] font-semibold text-sm md:text-base xl:text-lg">{message.subject}.</p>
                    <p className="text-xs md:text-sm xl:text-base font-medium text-[#667085]">{message.message}.</p>
                </div>

            ))}
                
            </div>
        </main>
     );
}
 
export default AllSupport;