//var can re-initialize and re-declare.
// var is global scope.where we can use.
var i=0;
var i=1;
for(var i=0;i<10;i++)
{
    console.log(i) // i returns 0 to 9
}
console.log(i) // here if we call outside the block,it returns the value.




//But Let,is block scope.we can't declare more than once.


// {
//     let i;
//     let i; here, we can't re-declare bcuz,it is blockscope. it will through error.

// }

for(let j=0;j<10;j++)
{
console.log(j);
}
// console.log(j) returns Uncaught ReferenceError: j is not defined.
// Bcuz j is already invoked,we can't re call same variable.

// m=5;
// let m;
// console.log(m)  Cannot access 'm' before initialization
// Bcuz,let and const cannot be used before declaration.

n=5;
var n;
console.log(n) // var - we can use  before the declaration.

const p=6;
// const p; cannot re-declare the block-scope variable
// p=7; cannot be re-initalize the const variable.
console.log(p);




