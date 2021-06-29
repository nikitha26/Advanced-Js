//Destructuring assignments
// let obj = {
//     title:"menu",
//     height:100,
//     width:200
// }
// //let {title,height,width} = obj;
// let {title, ...rest} = obj;      
// console.log(rest.width)


//JSON and its methods
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
//   let json = JSON.stringify(student)   //Here we called it as JSON-encoded or serialized
//   console.log(typeof(student))  //Ans:object
//   console.log(typeof(json))     //Ans:string


  //Recursion
  // function recursion(n){
  //   var sum = 0;
  //   for(var i = 1;i <= n;i++){
  //     //console.log(i)
  //     sum +=i;
  //   }
  //    console.log(sum)
  // }
  // recursion(3)

  //factorial
//  function fact(n){
//     var mul = 1;
//       //console.log(mul);
//     for(var i = n;i >= 1;i--){
//       mul = mul * i;
//       console.log(mul)
//     }
//  }
//  fact(4)


 //Rest parameter
 function sumAll(...args){       //args is array name
      let sum = 0;
      console.log(typeof(args))
      // console.log(args.length)
      // console.log(args[0])
      for(let digi of args) sum += digi;
      return sum;
 }
 var result = sumAll(1,2,3,4,5,2)
 console.log(result)