//new keyword:--->new keyword in javascript is used to create an instance of an object that has a constructor function
function create(name,age){
    this.name=name
    this.age=age

}
create.prototype.about=function(){
    console.log(this.name,this.age)
}
const stu=new create("neha",20)
stu.about()
console.log(stu)





///////example
function save(name,clas,rollno,section,marks){
    this .name=name,
    this.clas=clas,
    this.rollno=rollno,
    this.section=section,
    this.marks=marks
}
save.prototype.function1=function(){ // 1st function
            return ` ${this.name} rollno  ${this.rollno} belong to our college`
        };

save.prototype.function2=function(){  //2nd function
           if(this.marks<=40 && this.marks>0){
            console.log("oops! try next time you are fail")}
            else if(this.marks>=90 && this.marks<=100){
                console.log("congratulation you are toper")
            }
    else
    {
        console.log(" well done! you are pass")
    } 
        }
    
const student1= new save("neha","bca",6224,"B",6)
console.log(student1)
 console.log(student1.function1()) //function hmesha functin ke name or()eshi bracket she call hota hai
console.log(student1.function2())

const student2=new save("nitin","bca1",6215,"B",72)
console.log(student2)
console.log(student2.function1())
console.log(student2.function2())
 