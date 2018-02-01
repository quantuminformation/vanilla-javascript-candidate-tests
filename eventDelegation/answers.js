// ✅ Task write code to log what ever button id was pressed
document.addEventListener('click', function (event) {
    console.log(event.target.id)
})

document.addEventListener('click', function (event) {
    if(event.target.id < 10) {
        event.stopPropagation()
    }
    console.log(`with capture check ${event.target.id}`)
}, true)