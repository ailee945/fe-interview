function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  // 变成两位
  month = month < 10 ? "0" + month : month;
  let day = date.getDay();
  day = day<10?'0'+day:day
  console.log(`${year}/${month}/${day}`);
}

getTime()
