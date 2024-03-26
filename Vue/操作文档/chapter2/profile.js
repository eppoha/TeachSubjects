////==========示例32==========
export var firstName = 'M'
export var lastName = 'J'
export var year = 1958

var firstName1 = 'M'
var lastName1 = 'J'
var year1 = 1958
export {firstName1, lastName1, year1}

////==========示例33==========
export function multiply(x, y){
    return x * y
}

function v1(){
    console.log('this is func v1')
}

function v2(){
    console.log('this is func v2')
}

export {v1, v2}