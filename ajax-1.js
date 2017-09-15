function postMessage(url, msg) {
  let request = new XMLHttpRequest();
  request.open("POST", url);
  //用请求主体发送纯文本消息
  request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  request.send(msg); //把msg作为请求主体发送
  //请求完成，我们将忽略任何响应和任何错误
}

//发出一个HTTP GET请求以获得指定URL的内容
//当响应成功到达，验证它是否是纯文本
//如果是，把它传递给指定回调函数
function getText(url, callback) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = function () {
    //如果请求完成，且它是成功的
    if (request.readyState === 4 && request.status === 200) {
      let type = request.getResponseHeader("Content-Type");
      if (type.match(/^text/)) {
        callback(request.responseText);
      }
    }
  };
  request.send(null);
}

//发起同步的HTTP GET请求以获得指定URL的内容
//返回响应文本，或如果请求不成功或响应不是文本就报错
function getTextSync(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);

  if (request.status !== 200) {
    throw new Error(request.statusText);
  }

  let type = request.getResponseHeader("Content-Type");
  if (!type.match(/^text/)) {
    throw new Error("expected textual response;got:" + type);
  }

  return request.responseText;
}

//发起HTTP GET响应以获取指定URL的内容
//当响应到达时，把它以解析后的XML Document对象、解析后的JSON对象
//或字符串形式传递给回调函数
function get(url, callback) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = function () { //定义事件监听器
    if (request.readyState === 4 && request.status === 200) {
      let type = request.getResponseHeader("Content-Type");
      if (type.indexOf("xml") !== -1 && request.responseXML) {
        callback(request.responseXML); //Document对象响应
      } else if (type === "application/json") {
        callback(JSON.parse(request.responseText)); //JSON响应
      } else {
        callback(request.responseText); //字符串响应
      }
    }
  };
  request.send(null);
}

function encodeFormData(data) {
  if (!data) return "";
  let pairs = [];
  for (name in data) {
    if (!data.hasOwnProperty(name)) continue; //跳过继承属性
    if (typeof data[name] === "function") continue; //跳过方法
    let value = data[name].toString();
    name = encodeURIComponent(name.replace("%20", "+"));
    value = encodeURIComponent(value.replace("%20", "+"));
    pairs.push(name + "=" + value);
  }
  return pairs.join("&");
}

function postData(url, data, callback) {
  let request = new XMLHttpRequest();
  request.open("POST", url);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && callback) {
      callback(request);
    }
  };
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(encodeURIComponent(data));
}

function getData(url, data, callback) {
  let request = new XMLHttpRequest();
  request.open("GET", url + "?" + encodeURIComponent(data));
  request.onreadystatechange = function () {
    if (request.readyState === 4 && callback) {
      callback(request);
    }
  };
  request.send(null);
}

function postJSON(url, data, callback) {
  let request = new XMLHttpRequest();
  request.open("POST", url);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && callback) {
      callback(request);
    }
  };
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(data));
}

//查找有data-uploadto属性的全部<input type="file">元素
//并注册onchange事件处理程序
//这样任何选择的文件都会自动通过POST方法发送到指定的"uploadto" URL
//服务器的响应是忽略的
whenReady(function () { //当文档准备就绪时运行
  let elts = document.getElementsByTagName("input");
  for (let i = 0, len = elts.length; i < len; i++) {
    let input = elts[i];
    if (input.type !== "file") continue; //跳过所有非文件上传元素
    let url = input.getAttribute("data-uploadto");
    if (!url) continue; //跳过任何没有URL的元素

    input.addEventListener("change", function () { //当用户选择文件时
      let file = this.files[0]; //假设单个文件选择
      if (!file) return; //如果没有文件，不做任何事情
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.send(file); //把文件作为主体发送
    }, false)
  }
});