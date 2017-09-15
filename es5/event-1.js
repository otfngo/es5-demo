//当页面完全加载后（包括所有图像、JavaScrip文件、CSS文件等外部资源）
//就会触发window上面的load事件
window.onload = function(){
  let elt = document.getElementById("shipping_address");
  //注册事件处理程序函数，
  //在表单提交之前调用它
  elt.onsubmit = function(){
    alert("thanks for clicking me!");
  };
};

var div = document.getElementById("myDiv");
div.addEventListener("contextmenu", function(event){
  //首先，取消默认行为，以保证不显示浏览器默认的上下文菜单
  event.preventDefault();
  var menu = document.getElementById("myMenu");
  var overlay = document.getElementById("myMenuOverlay");
  menu.style.left = event.clientX + "px";
  menu.style.top = event.clientY + "px";
  overlay.style.display = "block";
}, false);

document.addEventListener("click", function(event){
  var overlay = document.getElementById("myMenuOverlay");
  if(event.target === overlay) {
    overlay.style.display = "none";
  }
}, false);


//DOMContentLoaded事件在形成完整的DOM树之后就触发
//不理会图像、JavaScript文件、CSS文件或其他资源是否已经下载完毕
//与Load事件不同，DOMContentLoaded支持在页面下载的早期添加事件处理程序
//这也就意味着用户能够尽早地与页面进行交互
document.addEventListener("DOMContentLoaded", function(event){
  //...
}, false);


//haschange事件在URL的参数列表（及URL中“#”号后面的所有字符串）
//发生变化时通知开发人员
window.addEventListener("haschange", function(event){
  //...
}, false);