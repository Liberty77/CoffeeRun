var promise = new Promise(function(resolve) {
    resolve(42);
});

promise.then(function(value) {
    console.log(value);
}).catch(function(error) {
    console.log(error);
});


//对于这个promise对象，我们调用它的 then 方法来设置resolve后的回调函数，
// catch 方法来设置发生错误时的回调函数。

function asyncFunction() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Async Hello World');
        }, 16);
    });
}

asyncFunction().then(function(value) {
    console.log(value);
}).catch(function(error) {
    console.log(error);
});

function getURL(URL) {

    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", URL, true);
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(new Error(req.statusText));
        };
        req.send();
    })
}

var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value) {
    console.log(value);
}).catch(function onRejected(error) {
    console.log(error);
})