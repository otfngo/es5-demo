{
    let html = document.documentElement
    console.log(html)

    let body = document.body
    console.log(body)
}

{
    // querySelector()方法接收一个CSS选择符
    // 返回与该模式匹配的第一个元素
    // 如果没有找到匹配的元素，返回null

    console.log(document.querySelector('body'))
    console.log(document.querySelector('#myDiv'))
    console.log(document.querySelector('.selected > li'))
    console.log(document.body.querySelector('img.button'))
}

{
    // querySelectorAll()返回的是所有匹配的元素而不仅仅是一个元素
    // 这个方法返回的是一个NodeList的实例
    // 如果没有找个匹配的元素，返回空NodeList

    console.log(document.querySelectorAll('.selected'))
}