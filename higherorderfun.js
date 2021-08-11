var radius = [2,3,4,5];
const diameter = function(radius){
    return 2 * radius;
}
const circumference = function(radius){
    return 2 * Math.PI * radius;
}
const area = function (radius){
    return Math.PI * radius *radius;
}
const calculate = function(radius,logic){
    var output = [];
   for(var i = 0;i < radius.length;i++){
     output.push(logic(radius[i]));
   }
   return output;
}
var x = radius.map(diameter)
console.log(x)
console.log(calculate(radius,diameter))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,area))