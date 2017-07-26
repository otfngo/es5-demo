//timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果
//过了指定的时间（ms参数）以后，Promise实例的状态变为Resolved，
//就会触发then方法绑定的回调函数
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then(value => console.log(value));


//Promise 新建后立即执行，所以首先输出的是Promise
//then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
//所以Resolved最后输出
let promise = new Promise((resolve, reject) => {
  console.log('Promise');
  resolve();
});

promise.then(() => console.log('Resolved'));

console.log('H1');
// Promise
// Hi!
// Resolved


//使用Promise包装一个图片加载的异步操作
//如果加载成功，就调用resolve方法，否则就调用reject方法
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Could not load image at ' + url));
    image.src = url;
  });
}


let getJSON = function (url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = handler;
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);

    function handler() {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });
  return promise;
};

getJSON("/posts.json").then(
  value => console.log('Contents: ' + value),
  error => console.error("error: " + error)
);

//reject函数的参数通常是Error对象的实例，表示抛出的错误
//resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
//
//p1和p2都是 Promise 的实例
//但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作
//这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态
//如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变
//如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行
let p1 = new Promise((resolve, reject) => {
  //...
});
let p2 = new Promise((resolve, reject) => {
  //...
  resolve(p1);
});


//then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）
//因此可以采用链式写法，即then方法后面再调用另一个then方法
//同时，第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数
getJSON("/posts.json")
  .then(value => value.post)
  .then(post => {
    //...
  });

//采用链式的then，可以指定一组按照次序调用的回调函数
//这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作）
//这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用
//
//下面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象
//这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化
//如果变为Resolved，就调用funcA，如果状态变为Rejected，就调用funcB
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  value => console.log("Resolved: ", value),
  error => console.error("Rejected: ", error)
);


//下面代码中，getJSON方法返回一个 Promise 对象,
//如果该对象状态变为Resolved，则会调用then方法指定的回调函数
//如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误
//另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获
//
//Promise.prototype.catch方法是.then(null, rejection)的别名
getJSON("/posts.json").then(
  //...
).catch(
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  error => console.error(error)
);


//Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
//也就是说，错误总是会被下一个catch语句捕获
getJSON("/post/1.json").then(
  value => getJSON(value.commentURL)
).then(
  //...
).catch(
  error => console.error(error)
);


//一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），
// 总是使用catch方法
//下面代码中，第二种写法要好于第一种写法，
// 理由是第二种写法可以捕获前面then方法执行中的错误，
// 也更接近同步的写法（try/catch）。
// 因此，建议总是使用catch方法，而不使用then方法的第二个参数
// bad
promise
  .then(function (data) {
    // success
  }, function (err) {
    // error
  });

// good
promise
  .then(function (data) {
    // success
  })
  .catch(function (err) {
    // error
  });


//下面代码中，promises是包含6个 Promise 实例的数组
//只有这6个实例的状态都变成fulfilled，或者其中有一个变为rejected
//才会调用Promise.all方法后面的回调函数
let promises = [2, 3, 4, 5, 7, 11, 13].map(value => getJSON(`/post/${value}.json`));
Promise.all(promises).then(
  //...
).catch(
  //...
);


const databasePromise = connectDatabase();
const booksPromise = databasePromise.then(findAllBooks);
const userPromise = databasePromise.then(getCurrentUser);
Promise.all([booksPromise, userPromise]).then(
  ([books, user]) => pickTopRecommentations(books, user)
);