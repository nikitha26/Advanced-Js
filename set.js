function fun(){
  console.log("Hello");
}
//setTimeout(fun,1000)

function Hello(name){
   console.log("Hello "+name)
}
//setTimeout(Hello,1000,'John');

//Clear Interval
// var x = setInterval(() => {
//     console.log("Hello")
// }, 1000);

// setTimeout(() => {
//     clearInterval(x);
//     console.log("Stop");
// }, 3000);

function printnumber(from,to){
  var current = from;
  let timer_id = setInterval(() => {
      console.log(current);
      if(current == to){
          clearInterval(timer_id)
      }
      current++;
  }, 1000);
}
printnumber(5,8)