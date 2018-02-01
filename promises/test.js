// 📝 Task call the promise and respond make the promise reject then catch it

const promise1 = new Promise(
    function (resolve, reject) {
        resolve('The value from the promise')
    })

// 📝 Task wait until both promises are resolved and process the result by logging the returned values

function returns_a_Promise () {
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => resolve(), 2000)
        })
}

// todo process the promises
