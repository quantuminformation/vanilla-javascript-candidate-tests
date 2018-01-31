// Question Passing functions

function passMe(){
    console.log(`${arguments.callee.name} was called`)
}

function iCallFunctionsPassedToMe(somefunction) {
    somefunction()
}

iCallFunctionsPassedToMe(passMe)