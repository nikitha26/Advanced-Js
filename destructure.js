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
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  let json = JSON.stringify(student)   //Here we called it as JSON-encoded or serialized
  console.log(typeof(student))  //Ans:object
  console.log(typeof(json))     //Ans:string

