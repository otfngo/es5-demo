{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(imgs) {
        let frag = document.createDocumentFragment()

        imgs.forEach((img) => {
            frag.appendChild(img)
        })

        document.body.appendChild(frag)
    }

    Promise.all([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548623934&di=2ec212b8a9504e043c478738bccde363&imgtype=0&src=http%3A%2F%2F4493bz.1985t.com%2Fuploads%2Fallimg%2F160813%2F3-160Q3104041.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548687709&di=c145dbaaed0cf67105478aa5e371ac8c&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201410%2F2014102406.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548730103&di=d91c380c12d83b560cbe4b051c53b786&imgtype=0&src=http%3A%2F%2Fimg02.3dmgame.com%2Fuploads%2F140627%2F236-14062G03934530.jpg')
    ]).then(showImgs)
}

{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p')
        p.appendChild(img)
        document.body.appendChild(p)
    }

    Promise.race([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548623934&di=2ec212b8a9504e043c478738bccde363&imgtype=0&src=http%3A%2F%2F4493bz.1985t.com%2Fuploads%2Fallimg%2F160813%2F3-160Q3104041.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548687709&di=c145dbaaed0cf67105478aa5e371ac8c&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201410%2F2014102406.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505548730103&di=d91c380c12d83b560cbe4b051c53b786&imgtype=0&src=http%3A%2F%2Fimg02.3dmgame.com%2Fuploads%2F140627%2F236-14062G03934530.jpg')
    ]).then(showImgs)
}