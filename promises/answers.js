// ✅ Task call the promise and respond by logging the resolved value

const promise1 = new Promise(
    function (resolve, reject) {
        resolve('The value from the promise')
        //reject('The rejectionvalue from the promise')
    })

promise1.then(value => console.log(value)).catch(error => console.log(error))

// ✅ Task wait until both promises are resolved and process the result by logging the returned values

function returns_a_Promise () {
    return new Promise(
        function (resolve, reject) {
            setTimeout(resolve('The value from the second promise'), 500)
        })
}

Promise.all([promise1, returns_a_Promise()]).then(
    (values) => {
        values.forEach(value => console.log(value))
    })