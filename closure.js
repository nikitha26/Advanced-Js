
// function f() {
//     var value = 123;
//     console.log(value)
//     return function(){
        
//        return value;
//     };
// }
//   var g = f();
//   console.log(g)
  

//   function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12

// let name = 'john';
// function sayhi(){
//     console.log("Hi" +name)
// }
// name = "pet";
// sayhi();

// function makeWorker() {
//     let name = "Pete";

//     return function() {
//       console.log(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); // what will it show?

 

// function func() {
//     let x = 1;
//     let x = 2;
//   console.log(x); // ?
// }
// //console.log(x)
// func();
var x = 4;
function func() {
    //var x = 1;
    var x = 2;
  console.log(x); // ?
}
console.log(x)
func();

// function sayHi() {
//     var phrase;
    
  
//     console.log(phrase);
//     phrase = "Hello";
    
//   }
//   sayHi();