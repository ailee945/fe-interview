function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404 || xhr.status === 500) {
          reject(new Error("404 not found"));
        }
      }
    };
    xhr.send(null);
  });
  return p;
}

const url = "...url";
ajax(url)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
  