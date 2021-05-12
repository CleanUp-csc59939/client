const ConvertDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const localTime = dateObj.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const newdate = `${month}/${day}, ${localTime}`;
  return newdate;
};

export default ConvertDate;
