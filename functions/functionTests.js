// 📝 Task Pass the function into another function and call it

function passMe () {
    console.log(`${arguments.callee.name} was called`)
}

function iCallFunctionsPassedToMe () {
    // todo implement
}

iCallFunctionsPassedToMe()

// 📝 Task store the 3 functions in an array then iterate though them and call them

function one () {
    console.log(`${arguments.callee.name} was called`)
}

function two () {
    console.log(`${arguments.callee.name} was called`)
}

const arrayOfFunctions = []

// 📝 Task call the someFunction from the context of obj

someFunction = function () {
    console.log(this)
}
var obj = {foo: 1}
