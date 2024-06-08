const Progress = ({activeDiv}: {activeDiv : number}) => {
    return ( 
        <main>
            <div className="flex mt-10 w-full">
                    <div className="flex flex-col w-[15%]">
                        <div className="flex items-center">
                            <div className="h-1 w-[80%] sm:w-[98%] bg-[#C06438] rounded-md"></div>
                            <div className="h-4 w-4 rounded-[50%] bg-[#C06438]"></div>
                        </div>
                        <p className="text-[0.5rem] sm:text-xs font-medium xl:text-sm flex justify-center">Personal Details</p>
                    </div>
                    <div className="flex flex-col  w-[30%]">
                        <div className="flex items-center">
                            <div className={`h-1 w-[90%] sm:w-[98%] bg-[#C06438] ${activeDiv >= 1 ? "" : "bg-opacity-40"} rounded-md`}></div>
                            <div className={`h-4 w-4 rounded-[50%] bg-[#C06438] ${activeDiv >= 1 ? "" : "bg-opacity-40"}`}></div>
                        </div>
                       <p className="text-[0.5rem] sm:text-xs font-medium xl:text-sm flex justify-center">Contact Details</p>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <div className="flex items-center">
                            <div className={`h-1 w-[90%] sm:w-[98%] bg-[#C06438] ${activeDiv >= 2 ? "" : "bg-opacity-40"} rounded-md`}></div>
                            <div className={`h-4 w-4 rounded-[50%] bg-[#C06438] ${activeDiv >= 2 ? "" : "bg-opacity-40"}`}></div>
                        </div>
                        <p className="text-[0.5rem] sm:text-xs font-medium xl:text-sm flex justify-center">Security Details</p>
                    </div>
                    <div className="flex flex-col w-1/4">
                        <div className="flex items-center">
                            <div className={`h-1 w-[70%] sm:w-[80%] bg-[#C06438] ${activeDiv >= 3 ? "" : "bg-opacity-40"} rounded-md`}></div>
                            <div className={`h-4 w-4 rounded-[50%] bg-[#C06438] ${activeDiv >= 3 ? "" : "bg-opacity-40"}`}></div>
                            <div className={`h-1 w-[15%] bg-[#C06438] ${activeDiv === 3 ? "" : "bg-opacity-40"} rounded-md`}></div>
                        </div>
                        <p className="text-[0.5rem] sm:text-xs font-medium xl:text-sm flex justify-center">Verification</p>
                    </div>
                </div>
        </main>
     );
}
 
export default Progress;