// class Student{
//     constructor(sId,name){
//     this.id=sId
//     this.name=name
//     this.school='gofur chowdhury high school'
//     }
// }
// const student1=new Student(12,"shovo")
// console.log(student1.name)
class parent{
    constructor(){
        this.fname="shahalam"
    }
}

class child extends parent{
    constructor(name){
        super()
        this.name=name
    }
}
const son= new child("raju")
const son2= new child("raju")
console.log(son)
console.log(son2)