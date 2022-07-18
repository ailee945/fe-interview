// 创建ajax对象
const xhr = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : new ActiveXObject("Microsoft.XMLHTTP"); // 兼容IE6-
// 配置ajax请求地址
// method url async
xhr.open("GET", "index.html", true);
// 发送请求
xhr.send(null);
// 监听请求，接收响应
xhr.onreadysatechange = function () {
  if (
    (xhr.readystatus === 4 && xhr.status === 200) ||
    xhr.status == 200 ||
    xhr.status == 304
  ) {
    console.log(xhr.responsetXML);
  }
};
