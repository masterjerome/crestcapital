"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchExchangeRate } from "@/lib/currencyConverter";

//Import Needed Icons
import { ArrowDown2, ArrowRight3 } from "iconsax-react";
//Import Images
import germanFlag from "../../../public/Images/germany.svg";
import ukFlag from "../../../public/Images/united kingdom.svg";
import usFlag from "../../../public/Images/united states.svg";
import chinaFlag from "../../../public/Images/china.svg";
import canadaFlag from "../../../public/Images/canada.svg";
import japanFlag from "../../../public/Images/japan.svg";
import australiaFlag from "../../../public/Images/australia.svg";
import brazilFlag from "../../../public/Images/brazil.svg";
import bulgariaFlag from "../../../public/Images/bulgaria.svg";
import icelandFlag from "../../../public/Images/iceland.svg";
import indiaFlag from "../../../public/Images/india.svg";
import indonesiaFlag from "../../../public/Images/indonesia.svg";
import malaysiaFlag from "../../../public/Images/malaysia.svg";
import norwayFlag from "../../../public/Images/norway.svg";
import philippinesFlag from "../../../public/Images/philippines.svg";
import southAfricaFlag from "../../../public/Images/south africa.svg";
import southKoreaFlag from "../../../public/Images/south korea.svg";
import swedenFlag from "../../../public/Images/sweden.svg";


const Convert = () => {
    //Currency state
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalOpen1, setModalOpen1] = useState<boolean>(false)
    const [beforeCurrency, setBeforeCurrency] = useState<string>("germany")
    const [chosenCurrency, setChosenCurrency] = useState<string>("united")
    const [convertedAmount, setConvertedAmount] = useState<number>(0)
    const [toConvertAmount, setToConvertAmount] = useState<number>(100)
    const [beforeFlag, setBeforeFlag] = useState(germanFlag)
    const [beforeCountry, setBeforeCountry] = useState<string>("germany")
    const [beforeCountrySymbol, setBeforeCountrySymbol] = useState<string>("EUR")
    const [flag, setFlag] = useState(ukFlag)
    const [country, setCountry] = useState<string>("united")
    const [countrySymbol, setCountrySymbol] = useState<string>("GBP")

    //Functions
    const openModal = () => {
        setModalOpen((prev) => !prev)
    }
    const openModal1 = () => {
        setModalOpen1((prev) => !prev)
    }
//Currency switch statement
useEffect(() => {
    
    switch (beforeCurrency) {
    case "united":
        setBeforeFlag (ukFlag)
        setBeforeCountry ("United Kingdom")
        setBeforeCountrySymbol ("GBP")
        break;
    case "america":
        setBeforeFlag (usFlag)
        setBeforeCountry ("United States")
        setBeforeCountrySymbol ("USD")
        break;
    case "canada":
        setBeforeFlag (canadaFlag)
        setBeforeCountry ("Canada")
        setBeforeCountrySymbol ("CAD")
        break;
    case "china":
        setBeforeFlag (chinaFlag)
        setBeforeCountry ("China")
        setBeforeCountrySymbol ("CNY")
        break;
    case "japan":
        setBeforeFlag (japanFlag)
        setBeforeCountry ("Japan")
        setBeforeCountrySymbol ("JPY")
        break;
    case "germany":
        setBeforeFlag (germanFlag)
        setBeforeCountry ("Germany")
        setBeforeCountrySymbol ("EUR")
        break;    
    case "australia":
        setBeforeFlag (australiaFlag)
        setBeforeCountry ("Australia")
        setBeforeCountrySymbol ("AUD")
        break;
    case "brazil":
        setBeforeFlag (brazilFlag)
        setBeforeCountry ("Brazil")
        setBeforeCountrySymbol ("BRL")
        break;
    case "bulgaria":
        setBeforeFlag (bulgariaFlag)
        setBeforeCountry ("Bulgaria")
        setBeforeCountrySymbol ("BGN")
        break;
    case "iceland":
        setBeforeFlag (icelandFlag)
        setBeforeCountry ("Iceland")
        setBeforeCountrySymbol ("ISK")
        break;
    case "india":
        setBeforeFlag (indiaFlag)
        setBeforeCountry ("India")
        setBeforeCountrySymbol ("INR")
        break;
    case "indonesia":
        setBeforeFlag (indonesiaFlag)
        setBeforeCountry ("Indonesia")
        setBeforeCountrySymbol ("IDR")
        break;
    case "malaysia":
        setBeforeFlag (malaysiaFlag)
        setBeforeCountry ("Malaysia")
        setBeforeCountrySymbol ("MYR")
        break;
    case "norway":
        setBeforeFlag (norwayFlag)
        setBeforeCountry ("Norway")
        setBeforeCountrySymbol ("NOK")
        break;
    case "philippines":
        setBeforeFlag (philippinesFlag)
        setBeforeCountry ("Philippines")
        setBeforeCountrySymbol ("PHP")
        break;
    case "southAfrica":
        setBeforeFlag (southAfricaFlag)
        setBeforeCountry ("South Africa")
        setBeforeCountrySymbol ("ZAR")
        break;
    case "southKorea":
        setBeforeFlag (southKoreaFlag)
        setBeforeCountry ("South Korea")
        setBeforeCountrySymbol ("KRW")
        break;
    case "sweden":
        setBeforeFlag (swedenFlag)
        setBeforeCountry ("Sweden")
        setBeforeCountrySymbol ("SEK")
        break;
    default:
        setBeforeFlag (ukFlag)
        setBeforeCountry ("United Kingdom")
        setBeforeCountrySymbol ("GBP")
        break;
    } 
}, [beforeCurrency])

useEffect(() => {
    
    switch (chosenCurrency) {
    case "united":
        setFlag (ukFlag)
        setCountry ("United Kingdom")
        setCountrySymbol ("GBP")
        break;
    case "america":
        setFlag (usFlag)
        setCountry ("United States")
        setCountrySymbol ("USD")
        break;
    case "canada":
        setFlag (canadaFlag)
        setCountry ("Canada")
        setCountrySymbol ("CAD")
        break;
    case "china":
        setFlag (chinaFlag)
        setCountry ("China")
        setCountrySymbol ("CNY")
        break;
    case "japan":
        setFlag (japanFlag)
        setCountry ("Japan")
        setCountrySymbol ("JPY")
        break;
    case "germany":
        setFlag (germanFlag)
        setCountry ("Germany")
        setCountrySymbol ("EUR")
        break;    
    case "australia":
        setFlag (australiaFlag)
        setCountry ("Australia")
        setCountrySymbol ("AUD")
        break;
    case "brazil":
        setFlag (brazilFlag)
        setCountry ("Brazil")
        setCountrySymbol ("BRL")
        break;
    case "bulgaria":
        setFlag (bulgariaFlag)
        setCountry ("Bulgaria")
        setCountrySymbol ("BGN")
        break;
    case "iceland":
        setFlag (icelandFlag)
        setCountry ("Iceland")
        setCountrySymbol ("ISK")
        break;
    case "india":
        setFlag (indiaFlag)
        setCountry ("India")
        setCountrySymbol ("INR")
        break;
    case "indonesia":
        setFlag (indonesiaFlag)
        setCountry ("Indonesia")
        setCountrySymbol ("IDR")
        break;
    case "malaysia":
        setFlag (malaysiaFlag)
        setCountry ("Malaysia")
        setCountrySymbol ("MYR")
        break;
    case "norway":
        setFlag (norwayFlag)
        setCountry ("Norway")
        setCountrySymbol ("NOK")
        break;
    case "philippines":
        setFlag (philippinesFlag)
        setCountry ("Philippines")
        setCountrySymbol ("PHP")
        break;
    case "southAfrica":
        setFlag (southAfricaFlag)
        setCountry ("South Africa")
        setCountrySymbol ("ZAR")
        break;
    case "southKorea":
        setFlag (southKoreaFlag)
        setCountry ("South Korea")
        setCountrySymbol ("KRW")
        break;
    case "sweden":
        setFlag (swedenFlag)
        setCountry ("Sweden")
        setCountrySymbol ("SEK")
        break;
    default:
        setFlag (ukFlag)
        setCountry ("United Kingdom")
        setCountrySymbol ("GBP")
        break;
    } 
}, [chosenCurrency])

//Currency conversion
useEffect (() => {
    const fromCurrency = beforeCountrySymbol;
    fetchExchangeRate({toConvertAmount, fromCurrency, countrySymbol})
    .then((exchangeRate) => {
    setConvertedAmount(exchangeRate)
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });
    
}, [beforeCountrySymbol, countrySymbol, toConvertAmount])
    return ( 
        <main>
            <p className="text-sm lg:text-base text-[#06121B] font-semibold my-4">Convert Amount</p>
            <div className=" flex flex-col gap-y-5 2xl:gap-y-0 2xl:flex-row 2xl:justify-between 2xl:items-center">
                <div className="relative min-w-[14rem] 2xl:w-[39%] cursor-pointer">
                    <div className=" bg-[#EBEBF52E] p-3 border border-[#7676801F] flex items-center justify-between rounded-lg" onClick={openModal1}>
                        <p className="text-xs 2xl:text-sm text-[#B2B3BA]">From:</p>
                        <div className="flex items-center gap-x-1">
                            <Image src={beforeFlag} alt="German Flag"/>
                            <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">{beforeCountry}</p>
                            <ArrowDown2 size="20" className={`${modalOpen1 && "rotate-180"} duration-200`}/>
                        </div>
                    </div>
                    <div className="bg-[#EBEBF52E] p-3 border border-[#7676801F] flex justify-between items-center mt-4 rounded-lg">
                        <div className="w-[80%] flex flex-col gap-y-1">
                            <p className="text-xs 2xl:text-sm text-[#B2B3BA]">You send:</p>
                            <input type="number" 
                                value={toConvertAmount}
                                onChange={(e : any) => {setToConvertAmount(e.target.value)}}
                                name="convertAmount" 
                                id="convertAmount"
                                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]" 
                            />
                        </div>
                        <p className="text-[10px] md:text-[12px] xl:text-[14px] text-secondary font-semibold">{beforeCountrySymbol}</p>
                    </div>
                    {modalOpen1 && 
                        <div className="bg-white border border-[#7676801F] absolute p-4 w-full top-14 flex flex-col gap-y-1 rounded-lg z-[999999] max-h-[20rem] overflow-y-auto special">
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("germany"); openModal1()}}>
                                <Image src={germanFlag} alt="German flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Germany</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("america"); openModal1()}}>
                                <Image src={usFlag} alt="US flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">United States</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("canada"); openModal1()}}>
                                <Image src={canadaFlag} alt="Canada flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Canada</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("china"); openModal1()}}>
                                <Image src={chinaFlag} alt="Chinese flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">China</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("united"); openModal1()}}>
                                <Image src={ukFlag} alt="United Kingdom Flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">United Kingdom</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("japan"); openModal1()}}>
                                <Image src={japanFlag} alt="Japanese flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Japan</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("australia"); openModal1()}}>
                                <Image src={australiaFlag} alt="Australia flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Australia</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("brazil"); openModal1()}}>
                                <Image src={brazilFlag} alt="Brazil flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Brazil</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("bulgaria"); openModal1()}}>
                                <Image src={bulgariaFlag} alt="Bulgaria flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Bulgaria</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("iceland"); openModal1()}}>
                                <Image src={icelandFlag} alt="Iceland flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Iceland</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("india"); openModal1()}}>
                                <Image src={indiaFlag} alt="India flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">India</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("indonesia"); openModal1()}}>
                                <Image src={indonesiaFlag} alt="Indonesia flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Indonesia</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("malaysia"); openModal1()}}>
                                <Image src={malaysiaFlag} alt="Malaysian flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Malaysia</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("norway"); openModal1()}}>
                                <Image src={norwayFlag} alt="Norway flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Norway</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("philippines"); openModal1()}}>
                                <Image src={philippinesFlag} alt="Philippines flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Philippines</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("southAfrica"); openModal1()}}>
                                <Image src={southAfricaFlag} alt="South Africa flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">South Africa</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("southKorea"); openModal1()}}>
                                <Image src={southKoreaFlag} alt="South Korean flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">South Korea</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setBeforeCurrency("sweden"); openModal1()}}>
                                <Image src={swedenFlag} alt="Sweden flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Sweden</p>
                            </div>
                        </div>
                    }
                </div>
                
                <div className="size-10 rounded-[50%] flex items-center justify-center text-[#F2F2F7] bg-secondary mx-auto cursor-pointer border border-secondary hover:text-secondary hover:bg-white duration-500">
                    <ArrowRight3 size="20" className=" -rotate-[30deg] xl:rotate-0"/>
                </div>
                <div className="relative min-w-[14rem] 2xl:w-[39%] cursor-pointer">
                    <div className=" bg-[#EBEBF52E] p-3 border border-[#7676801F] flex items-center justify-between rounded-lg" onClick={openModal}>
                        <p className="text-xs 2xl:text-sm text-[#B2B3BA]">To:</p>
                        <div className="flex items-center gap-x-1">
                            <Image src={flag} alt="United Kingdom Flag"/>
                            <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">{country}</p>
                            <ArrowDown2 size="20" className={`${modalOpen && "rotate-180"} duration-200`}/>
                        </div>
                    </div>
                    <div className="bg-[#EBEBF52E] p-3 border border-[#7676801F] flex justify-between items-center mt-4 rounded-lg">
                        <div className="w-[80%] flex flex-col gap-y-1">
                            <p className="text-xs 2xl:text-sm text-[#B2B3BA]">Recipient gets:</p>
                            <p className="text-lg xl:text-xl font-semibold py-2 md:py-3">{convertedAmount}</p>
                        </div>
                        <p className="text-[10px] md:text-[12px] xl:text-[14px] text-secondary font-semibold">{countrySymbol}</p>
                    </div>
                {modalOpen && 
                        <div className="bg-white border border-[#7676801F] absolute p-4 w-full top-14 flex flex-col gap-y-1 rounded-lg z-[999999] max-h-[20rem] overflow-y-auto special">
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("germany"); openModal()}}>
                                <Image src={germanFlag} alt="German flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Germany</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("america"); openModal()}}>
                                <Image src={usFlag} alt="US flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">United States</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("canada"); openModal()}}>
                                <Image src={canadaFlag} alt="Canada flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Canada</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("china"); openModal()}}>
                                <Image src={chinaFlag} alt="Chinese flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">China</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("united"); openModal()}}>
                                <Image src={ukFlag} alt="United Kingdom Flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">United Kingdom</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("japan"); openModal()}}>
                                <Image src={japanFlag} alt="Japanese flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Japan</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("australia"); openModal()}}>
                                <Image src={australiaFlag} alt="Australia flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Australia</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("brazil"); openModal()}}>
                                <Image src={brazilFlag} alt="Brazil flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Brazil</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("bulgaria"); openModal()}}>
                                <Image src={bulgariaFlag} alt="Bulgaria flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Bulgaria</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("iceland"); openModal()}}>
                                <Image src={icelandFlag} alt="Iceland flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Iceland</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("india"); openModal()}}>
                                <Image src={indiaFlag} alt="India flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">India</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("indonesia"); openModal()}}>
                                <Image src={indonesiaFlag} alt="Indonesia flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Indonesia</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("malaysia"); openModal()}}>
                                <Image src={malaysiaFlag} alt="Malaysian flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Malaysia</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("norway"); openModal()}}>
                                <Image src={norwayFlag} alt="Norway flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Norway</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("philippines"); openModal()}}>
                                <Image src={philippinesFlag} alt="Philippines flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Philippines</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("southAfrica"); openModal()}}>
                                <Image src={southAfricaFlag} alt="South Africa flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">South Africa</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("southKorea"); openModal()}}>
                                <Image src={southKoreaFlag} alt="South Korean flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">South Korea</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("sweden"); openModal()}}>
                                <Image src={swedenFlag} alt="Sweden flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Sweden</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
     );
}
 
export default Convert;