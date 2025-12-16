// firstfunction()  // independent function
// Date() Stik Node

// ES5
// function firstfunction(){
//    alert("Hello, This is first function");
// }
// firstfunction();  // function call

// ES6
// Arrow Function
// const firstfunction = () =>{
//     console.log('Hello Guyes');
// }
// firstfunction();  // function call


// firstfunction = () =>{
//     alert("Hello, This is first function");
// }
// firstfunction();  // function call


// function name ( parameters ) ======>

    // name( Arguments ) ======>

// ES5
// function firstfunction( name,name2 ){
//    console.log("Hello, This is " + name +" and "+ name2 + " and made for first function");
// }
// firstfunction("Noman","Huzaifa");  // function call with argument


// function sum(a,b){
//     console.log("Sum is: " + (b+a));
// }

// sum("Huzaifa ","Asif ");


// Default function with parameters

// function sum(name = "Huzaifa"){  // ==> default parameter
//     console.log('Hello '+name);
// }
// sum("Ali");


// var arrowFunction = (x, y) => {
//     console.log("Hello Huzaifa");
//     return x * y;
// };


// var result = arrowFunction(2,3);

// console.log( result);


// TDZ Stand For (Temporary Dead Zone);
// num = "Huzaifa";
// let num;
// console.log("Huzaifa");


// var uname = "Huzaifa";

// function example(){
//     console.log(uname);
// }
// console.log(uname);
// example();


if(1){
    var name = "Hello"
    console.log("Hello "+name);
}
console.log("Hello "+name);

// var is only functional scop
// and let and const is block scop {}

