// OOPs-Principles 
// class-class is a blue print or template from which objects created
//Object-contains properties and methods ex: car -color,model,type is properties
// whereas car performs some actions like driving called method

console.log("Polymorphism")
// poly-means "Many" && morph-means "forms"
// Having Same name with different parameters
// two types :-1. Compile time( Method Overloding )
// 2.Run-time ( Method Ovveriding )
console.log("Method Overloading");
//Example
function myFun()
{
    console.log("zero parameters");
}
function myFun(a)
{
    console.log("one parameters");
}
function myFun(a,b)
{
    console.log("two parameters");
}
myFun(1) // Output is two parameters

// Here,We are Passing one argument ,but it return two parameters output
// Bcuz, js read line by line and excute latest function.
// So,Method Overloading doesnot support MethodOverloading.

console.log("inheritance");
// Means One class inherits the features of another class
class A
{
constructor()
{
    console.log("A");
}
Amethod()
{
  console.log("hello")
}
method1()
{
    console.log("Inheritance");
}
}
class B extends A{ // extends used extend the features from A to B
    constructor()
    {
        console.log("B");
        super(); // super method refers to the parent class.
    }
    method1()
    {
        console.log("in-her-i-tance");
    }

}
const obj=new B(); // output is B , A
obj.method1(); // in-her-i-tance , child class method1 overriding the parent class - i.e Method Overriding
obj.Amethod();// calls the method from A
// Object is create for only Child ,not for parent.

console.log("Abstraction")
// hiding the implementation and returns the output
// example, we use mobile but dont know how it works internally.
const date=new Date()
console.log(date);
console.log(date.getFullYear());
date.setMonth(2)
console.log(date);
const date1=new Date(2016)
console.log(date1);
const date2=new Date(2016,11,12,10,11,12,78)
console.log(date2);


console.log("Static Method")
class staticMethod{
    static method()
    {
        console.log("static");
    }
    normalMethod()
    {
      staticMethod.method();// we can call static method in normal method,but not normal in static
        console.log("normal");
    }

}
const staticMethod1=new staticMethod();// class depends upon objects
staticMethod1.normalMethod();
staticMethod.method();// static method depends upon class