import { create } from 'zustand';

type UserStore = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  profileImgSrc: string;
  country: string;
  city: string;
  state: string;
  address: string;
  mobileNumber: string;
  idType: string;
  idNumber: string;
  dateOfExpiry: string;
  idCardFrontImgSrc: string;
  idCardBackImgSrc: string;
  updateFirstName: (newFirstName: string) => void;
  updateLastName: (newLastName: string) => void;
  updateEmail: (newEmail: string) => void;
  updatePassword: (newPassword: string) => void;
  updateDateOfBirth: (newDateOfBirth: string) => void;
  updateProfileImgSrc: (newProfileImgSrc: string) => void;
  updateCountry: (newCountry: string) => void;
  updateCity: (newCity: string) => void;
  updateState: (newState: string) => void;
  updateAddress: (newAddress: string) => void;
  updateMobileNumber: (newMobileNumber: string) => void;
  updateIdType: (newIdType: string) => void;
  updateIdNumber: (newIdNumber: string) => void;
  updateDateOfExpiry: (newDateOfExpiry: string) => void;
  updateIdCardFrontImgSrc: (newIdCardFrontImgSrc: string) => void;
  updateIdCardBackImgSrc: (newIdCardBackImgSrc: string) => void;
}

export const useCreateUserStore = create<UserStore>((set) => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    profileImgSrc: '',
    country: '',
    city: '',
    state: '',
    address: '',
    mobileNumber: '',
    idType: '',
    idNumber: '',
    dateOfExpiry: '',
    idCardFrontImgSrc: '',
    idCardBackImgSrc: '',
    updateFirstName: (newFirstName: string) => set({ firstName : newFirstName.toLocaleLowerCase() }),
    updateLastName: (newLastName: string) => set({ lastName : newLastName.toLocaleLowerCase() }),
    updateEmail: (newEmail: string) => set({ email : newEmail.toLocaleLowerCase() }),
    updatePassword: (newPassword: string) => set({password : newPassword}),
    updateDateOfBirth: (newDateOfBirth: string) => set({dateOfBirth : newDateOfBirth}),
    updateProfileImgSrc: (newProfileImgSrc: string) => set({profileImgSrc : newProfileImgSrc}),
    updateCountry: (newCountry: string) => set({ country : newCountry}),
    updateCity: (newCity: string) => set({ city : newCity}),
    updateState: (newState: string) => set({ state : newState}),
    updateAddress: (newAddress: string) => set({ address : newAddress }),
    updateMobileNumber: (newMobileNumber: string) => set({ mobileNumber : newMobileNumber }),
    updateIdType: (newIdType: string) => set({idType : newIdType}),
    updateIdNumber: (newIdNumber: string) => set({idNumber : newIdNumber}),
    updateDateOfExpiry: (newDateOfExpiry: string) => set({dateOfExpiry : newDateOfExpiry}),
    updateIdCardFrontImgSrc: (newIdCardFrontImgSrc: string) => set({idCardFrontImgSrc : newIdCardFrontImgSrc}),
    updateIdCardBackImgSrc: (newIdCardBackImgSrc: string) => set({idCardBackImgSrc : newIdCardBackImgSrc}),
    
  })); 