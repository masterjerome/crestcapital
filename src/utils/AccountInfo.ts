// Generate a random 4-digit number
export const generateOTPNumber = (): number => {
    return Math.floor(1000 + Math.random() * 9000);
};
  
// Generate a random 10-digit number
export const generateAccountNumber = (): number => {
    return Math.floor(1000000000 + Math.random() * 9000000000);
};
  