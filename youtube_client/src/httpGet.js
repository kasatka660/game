export default function httpGet(url) {
  return new Promise(((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error); 0;
      }
    };

    request.onerror = function () {
      reject(new Error('Network Error'));
    };
    request.send();
  }));
}
