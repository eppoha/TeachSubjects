export var firstName = 'aaa'
export var secName = 'bbb'

var thirdName = 'cccc'
export {thirdName}

function v1(){
    console.log('this is func v1')
}

function v2(){
    console.log('this is func v2')
}

export {v1, v2}