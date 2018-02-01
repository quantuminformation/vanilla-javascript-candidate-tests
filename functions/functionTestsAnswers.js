// ✅ Task Pass the function into another function and call it

function passMe () {
    console.log(`${arguments.callee.name} was called`)
}

function iCallFunctionsPassedToMe (somefunction) {
    somefunction()
}

iCallFunctionsPassedToMe(passMe)

// ✅ Task store the 3 functions in an array then iterate though them (using for and forEach)and call them

function one () {
    console.log(`${arguments.callee.name} was called`)
}

function two () {
    console.log(`${arguments.callee.name} was called`)
}

const arrayOfFunctions = [one, two]
for (var i = 0; i < arrayOfFunctions.length; i++) {
    arrayOfFunctions[i]()
}
// alternate answer
arrayOfFunctions.forEach(item => item())

// ✅ Task call the someFunction from the context of obj

someFunction = function () {
    console.log(this)
}
someFunction() // will show window
var obj = {foo: 1}
someFunction.call(obj)