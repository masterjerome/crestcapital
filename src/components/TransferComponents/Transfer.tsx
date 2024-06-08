"use client";
import { useState, useEffect } from "react";
import { useTransactionStore } from "@/store/transactionStore";

//Import Needed Icons
import { ArrowRotateRight } from "iconsax-react";

const Transfer = () => {
  //States for the transactions
  const {
    isSavebox,
    amount,
    accountName,
    accountNumber,
    bankName,
    routingNumber,
    bankAddress,
    swiftCode,
    description,
    iban,
    updateAmount,
    updateAccountName,
    updateSaveBox,
    updateAccountNumber,
    updateDepositMethod,
    updateBankName,
    updateRoutingNumber,
    updateBankAddress,
    updateSwiftCode,
    updateDescription,
    updateIban,
  } = useTransactionStore();
  //States for the input
  const [internationalTransfer, setInternationalTransfer] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [showInputField, setShowInputField] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [saveBox, setSaveBox] = useState<boolean>(false);
  //For the international transfer
  const handleInternationalTransferChange = () => {
    setInternationalTransfer((prevValue) => !prevValue);
  };
  //For the safebox
  function handleSaveBoxChange() {
    setSaveBox(prev => !prev);
  }
  
  //Use Effect for the Input field
  useEffect(() => {
    if (inputValue.length > 0) {
      setShowIcon(true);

      const timeoutId = setTimeout(() => {
        setShowIcon(false);
        setShowInputField(true);
      }, 8000);

      return () => clearTimeout(timeoutId);
    } else {
      // If the input value is empty, hide the icon
      setShowIcon(false);
    }
  }, [inputValue]);
  //Update Deposit Method
  useEffect(() => {
    if (internationalTransfer) {
      updateDepositMethod("International_Wire_Transfer");
    } else {
      updateDepositMethod("Domestic_Wire_Transfer");
    }
    if(saveBox){
      updateSaveBox(true)
    }else {
      updateSaveBox(false)
    }
  }, [internationalTransfer, saveBox, updateDepositMethod, updateSaveBox]);

  return (
    <main className="text-xs md:text-sm xl:text-base">
      <form>
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="accountNumber"
            className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
          >
            Account number
          </label>
          <input
            value={accountNumber}
            onChange={(e) => {
              setInputValue(e.target.value);
              updateAccountNumber(e.target.value);
            }}
            required
            placeholder="0930202020"
            pattern="\d{10}"
            type="text"
            title="Please enter a 10 digit account number"
            name="accountNumber"
            id="accountNumber"
            max={10}
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
          />
        </div>
        {showIcon && (
          <div className="flex gap-x-2 items-center mt-4">
            <ArrowRotateRight size="24" className="text-primary animate-spin" />
            <p className="text-xs xl:text-sm text-textPrimary">
              Fetching Account Details
            </p>
          </div>
        )}
        {showInputField && (
          <div className="mt-6">
            <p className="text-red-600 text-xs xl:text-sm mb-4">
              Account details unavailable. Please enter below
            </p>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="bankName"
                className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
              >
                Bank name
              </label>
              <input
                value={bankName}
                onChange={(e: any) => updateBankName(e.target.value)}
                required
                placeholder="Deutsche Bank"
                type="text"
                title="Please enter the bank name"
                name="bankName"
                id="bankName"
                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
              />
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <label
                htmlFor="accountName"
                className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
              >
                Account name
              </label>
              <input
                value={accountName}
                onChange={(e: any) => updateAccountName(e.target.value)}
                required
                placeholder="John Doe"
                type="text"
                name="accountName"
                id="accountName"
                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
              />
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <label
                htmlFor="routingNumber"
                className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
              >
                Routing number
              </label>
              <input
                value={routingNumber}
                onChange={(e: any) => updateRoutingNumber(e.target.value)}
                required
                placeholder="123456789"
                type="text"
                pattern="\d{9}"
                title="Please enter exactly 9 digits"
                name="routingNumber"
                id="routingNumber"
                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
              />
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <label
                htmlFor="bankAddress"
                className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
              >
                Bank address
              </label>
              <input
                value={bankAddress}
                onChange={(e: any) => updateBankAddress(e.target.value)}
                required
                placeholder="100 Main Street Any town, USA 12345"
                type="text"
                name="bankAddress"
                id="bankAddress"
                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-y-1 mt-4">
          <label
            htmlFor="amount"
            className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
          >
            Amount
          </label>
          <input
            value={amount}
            onChange={(e: any) => updateAmount(e.target.value)}
            required
            placeholder="Enter Amount"
            type="number"
            name="amount"
            id="amount"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
          />
        </div>
        <div className="flex flex-col gap-y-1 mt-4">
          <label
            htmlFor="description"
            className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(e: any) => updateDescription(e.target.value)}
            required
            placeholder="Enter a brief Description"
            name="description"
            id="description"
            maxLength={50}
            className="resize-none border border-[#E6E7E8] px-2 xl:px-4 py-2 h-14 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
          />
        </div>
        <label
          className={`mt-4 border border-[#E6E7E8] ${
            internationalTransfer
              ? "bg-indigo-50 text-indigo-900 ring-indigo-200"
              : ""
          } p-2 md:p-3 flex justify-between rounded-lg cursor-pointer hover:bg-[#B9BAC0] hover:bg-opacity-20`}
        >
          International Transfer?
          <input
            onChange={handleInternationalTransferChange}
            type="checkbox"
            checked={internationalTransfer}
            className="checked:border-indigo-500"
          />
        </label>
        <label
          className={`mt-4 border border-[#E6E7E8] ${
            saveBox ? "bg-indigo-50 text-indigo-900 ring-indigo-200" : ""
          } p-2 md:p-3 flex justify-between rounded-lg cursor-pointer hover:bg-[#B9BAC0] hover:bg-opacity-20`}
        >
          Save 1% of the transfer amount
          <input
            onClick={handleSaveBoxChange}
            type="checkbox"
            checked={saveBox}
            className="checked:border-indigo-500"
          />
        </label>
        {internationalTransfer && (
          <div>
            <div className="flex flex-col gap-y-1 mt-4">
              <label
                htmlFor="iban"
                className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
              >
                IBAN
              </label>
              <input
                value={iban}
                onChange={(e: any) => updateIban(e.target.value)}
                required
                placeholder="Enter Recipient IBAN"
                type="string"
                name="iban"
                id="iban"
                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
              />
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <label
                htmlFor="swiftCode"
                className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
              >
                Swift Code
              </label>
              <input
                value={swiftCode}
                onChange={(e: any) => updateSwiftCode(e.target.value)}
                required
                placeholder="Enter Bank SWIFT/BIC Code"
                type="string"
                name="swiftCode"
                id="swiftCode"
                className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
              />
            </div>
            <p className="my-2 text-[0.6rem] xl:text-xs text-red-600">
              Please verify recipient transfer amounts and exchange rates prior
              to sending your payment.
            </p>
          </div>
        )}
      </form>
    </main>
  );
};

export default Transfer;
