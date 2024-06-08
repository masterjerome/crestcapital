export const getFormattedDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
  };