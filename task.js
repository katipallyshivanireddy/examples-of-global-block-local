// block scope using let
if(true)
{
    let x=10;
    console.log(x);
}    

function a()
{
    let a1="shivani";
    console.log(a1)
}
a()

// using const

{
    const a=20;
    console.log(a)
}


// global scope 

var a ="shivani reddy"
function name(){
    console.log(a)
}
name();
console.log(a)

let color="blue"
function showcolor(){
    console.log(color)
}
showcolor()
console.log(color)

var person={
    name: "shivani",
    age:23
    
};
function displayperson(){
    console.log(person.name);
}
displayperson();
console.log(person.age);


// local scope

function greet(){
    var message="hello";
    console.log(message)
} 
greet();
// console.log(message) 
// in above example, the variable message is declared inside the greet function, making it a local variable. it cannot be accessed outside the functon

 var b=200;
 function sskk(){
    let a=10;
    var c=20;
    console.log(a+c);
 }
 sskk()

 