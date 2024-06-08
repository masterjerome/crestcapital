import { create } from 'zustand';

type balanceStore = {
    mainBalance : number;
    capitalWealthBalance : number;
    saveboxBalance : number;
    totalSavingsBalance : number;
    updateMainBalance : (newMainBalance : number) => void;
    updateCapitalWealthBalance : (newCapitalWealthBalance : number) => void;
    updateSaveboxBalance : ( newSaveboxBalance : number ) => void;
    updateTotalSavingsBalance : ( newTotalSavingsBalance : number ) => void;
}

export const useBalanceStore = create<balanceStore>((set) => ({
    mainBalance : 0,
    capitalWealthBalance : 0,
    saveboxBalance: 0,
    totalSavingsBalance: 0,
    updateMainBalance : (newMainBalance : number ) => set({mainBalance : newMainBalance}),
    updateCapitalWealthBalance : (newCapitalWealthBalance : number ) => set({capitalWealthBalance : newCapitalWealthBalance}),
    updateSaveboxBalance: (newSaveboxBalance : number ) => set({saveboxBalance : newSaveboxBalance}),
    updateTotalSavingsBalance: ( newTotaSavingsBalance : number ) => set({totalSavingsBalance : newTotaSavingsBalance})
}))