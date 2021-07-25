let obj = {
    name:"John",
    department:"HR",
    age:22,
    students: ["John", "Pete", "Alice"],
    details(){
        this.students.forEach(
            student => console.log(age+"-"+student)
           
        );
    }
};
//obj.details();

// let userobj = {
//     name:"Rock",
// }
// let user = ["nikitha","hyd"]
// // let des = Object.getOwnPropertyDescriptor(user,'name');
// // console.log(JSON.stringify(des, null, 2 ));
// let res = user.__proto__.length();
// console.log(res);


// Class and its methods
class user{
    constructor(fname,lname){
        this.fname = fname,
        this.lname = lname
    }
    
    fullname(){
        console.log(this.fname+" - "+this.lname)
    }
    
}
let myuser = new user("John","Smith");
//myuser.fullname();
//console.log(typeof(user))

class Animal{
    constructor(name){
        this.name = name;
    }
}
let ani = new Animal("Lion");


class wildanimal extends Animal{
    eat(){
     console.log(this.name)
    }
}
let wild = new wildanimal("tiger")
console.log(ani.name)
console.log(wild.name)