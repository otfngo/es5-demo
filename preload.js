{
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = readystatechangeCallback
    xhr.onprogress = progressCallback
    xhr.open('GET', 'http://image.baidu.com/mouse.jpg', true)
    xhr.send(null)

    function readystatechangeCallback() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let responseText = xhr.responseText
        } else {
            console.log(`request was unsuccessful: ${xhr.status}`)
        }
    }

    function progressCallback(e) {
        e = e || event
        if (e.lengthComputable) {
            console.log(`received ${e.loaded} of ${e.total} bytes`)
        }
    }
}

// 使用preload.js
// http://www.createjs.com/preloadjs
var queue = new createjs.LoadQueue();
queue.on("complete", handleComplete, this);
queue.loadManifest([
    { id: "myImage", src: "path/to/myImage.jpg" },
    { id: "myImage2", src: "path/to/myImage2.jpg" }
]);
function handleComplete() {
    var image = queue.getResult("myImage");
    document.body.appendChild(image);
}