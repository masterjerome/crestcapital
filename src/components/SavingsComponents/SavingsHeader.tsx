"use client"
import { useBalanceStore } from "@/store/BalanceDetails";

const SavingsHeader = ({currentCurrency}: any) => {
  const { totalSavingsBalance } = useBalanceStore()
  return (
    <main>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm lg:text-base text-[#06121B] font-semibold">
          Total savings
        </p>
        <p className="text-sm lg:text-base text-[#06121B] font-semibold">
        {currentCurrency ?? "€"}{totalSavingsBalance.toLocaleString()}.00
        </p>
      </div>
    </main>
  );
};

export default SavingsHeader;
