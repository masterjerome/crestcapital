import { create } from "zustand";

type savingsStore = {
    savingsType : string,
    updateSavingsType : (newSavingsType: string) => void;
}

export const useSavingsStore = create<savingsStore>((set) => ({
    savingsType: "",
    updateSavingsType: (newSavingsType : string) => set({savingsType : newSavingsType})
}))