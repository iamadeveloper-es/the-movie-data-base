export function formatDateDDMMYYYY(dateStr){
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const output = `${addCeroToDate(day)}-${addCeroToDate(month)}-${year}`;
  return output;
};

function addCeroToDate(input){
  return input < 10 ? '0' + input : input;
};

export function getYear(dateStr){
  const date = new Date(dateStr);
  return date.getFullYear();
}