export function formatDate(getDate) {
  console.log("Date function here");
  let year = getDate.getFullYear().toString();
  let monthFormat = getDate.getMonth().toString();
  let month = parseInt(monthFormat) + 1;
  let day = getDate.getDate().toString();
  let string = year + "-" + month + "-" + day;
  return string;
}
