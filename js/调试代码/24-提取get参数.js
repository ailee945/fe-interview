const url =
  "https://mail.qq.com/cgi-bin/loginpage?s=session_timeout&from=&r=f208371470adf6ed3f0d4d765311e3c2&tiptype=LOGIN_ERR_COOKIE_FORBIDDEN";

function serilizerURL(url) {
  const res = {};
  const search = url.split("?")[1].split("&");
  search.forEach((element) => {
    res[element.split("=")[0]] = element.split("=")[1];
  });
  return res;
}

console.log(serilizerURL(url));
