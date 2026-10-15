// variables and Data types
//  let , var , conts


// let Variables cannot be re- declared but can be update . A block scope variables
// let name = "vivek";
// name = "vivekk";
// name  = "Ankit";
// console.log(name);

// var variables can be re-declared & updata. A global scope varibles
// var NAME = "madheshiya"
// var NAME = "vivek"
// console.log(NAME)

// conts Variables cannot be re-declared or updata. A block scope variable
// const name1 = "Anas"
// const name1 = "kartik"  X
// name1 = "prashant"      X
// console.log(name1)

// block
// {
//     let a = 5;
//     console.log(a)
// }

// {
//     let a = 10;
//     console.log(a)
// }


//  Data types in js
//  two type of data types
// primitive
// String , Number , Bigint , boolean , undefined , null , symbol
// let fullname = "vivek gupta"
// console.log(typeof(fullname))

// let age = 21;
// console.log(age)
// console.log(typeof(age))

// bigint
// let y = BigInt("123")
// console.log(y)
// console.log(typeof(y))

// boolean
let a = true
console.log(a)
console.log(typeof(a))

// null
let nul = null
console.log(nul)
console.log(typeof(nul))

// undefined
let x;
console.log(x)

// symbol
let z = Symbol("hello!")
console.log(z)
console.log(typeof(z))

// non primitive
// object , Array , functio , map , set , data

const student = {
    fullname : "vivek Gupta",
    age : 20,
    cgpa : 6.5,
    ispass : true,
};
// student[ "age"] = student ["age"] + 1
student[ "age"] = 25
student["fullname"] = " vivek"

console.log(student.age)
console.log(student.name)
console.log(student)
// console.log(typeof(student))
// console.log(student["age"])
// console.log(student.age)