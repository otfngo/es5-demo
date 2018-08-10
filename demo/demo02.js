{
  // 当页面完全加载后（包括所有图像、JavaScrip文件、CSS文件等外部资源），
  // 就会触发window上面的load事件
}

{
  // DOMContentLoaded事件在形成完整的DOM树之后就触发
  // 不理会图像、JavaScript文件、CSS文件或其他资源是否已经下载完毕
  // 与Load事件不同，DOMContentLoaded支持在页面下载的早期添加事件处理程序
  // 这也就意味着用户能够尽早地与页面进行交互
  document.addEventListener("DOMContentLoaded", function(event) {
    // ...
  }, false)
}