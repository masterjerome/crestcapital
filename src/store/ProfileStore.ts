import { create } from "zustand";

type profileStore = {
    currentDetails: string;
    updateCurrentDetails : (newCurrentDetails : string) => void;
}

export const useProfileStore = create<profileStore>((set) => ({
    currentDetails: "personal",
    updateCurrentDetails : ( newCurrentDetails : string ) => set({currentDetails : newCurrentDetails})
}))