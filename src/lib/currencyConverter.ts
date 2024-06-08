type currencyType = {
    toConvertAmount: number,
    fromCurrency: string,
    countrySymbol: string,
}
export const fetchExchangeRate = async ({toConvertAmount, fromCurrency, countrySymbol} : currencyType) => {
    const host = 'api.frankfurter.app';
    const url = `https://${host}/latest?amount=${toConvertAmount}&from=${fromCurrency}&to=${countrySymbol}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate');
      }
  
      const data = await response.json();
      return data.rates[countrySymbol];
    } catch (error : any) {
      console.error('Error fetching exchange rate:', error.message);
      throw error;
    }
};