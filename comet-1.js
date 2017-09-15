window.onload = function(){
  let nick = prompt("enter your nickname");
  let input = document.getElementById("input");
  input.focus();

  //通过EventSource注册新消息的通知
  let chat = new EventSource("/chat");
  chat.onmessage = function(event){ //当捕获一条消息时
    let msg = event.data; //从事件对象中取得文本数据
    let node = document.createTextNode(msg);
    let div = document.createElement("div");
    div.appendChild(node);
    document.body.insertBefore(div, input); //将div插入input之前
    input.scrollIntoView(); //保证input元素可见
  };

  //使用XMLHttpRequest把用户的消息发送给服务器
  input.onchange = function(){ //用户完成输入
    let msg = nick + ":" + input.value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/chat"); //发送到/chat
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"); //指明为普通的UTF-8文本
    xhr.send(msg);
    input.value = ""; //准备下次输入
  };
};