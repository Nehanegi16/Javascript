function sing(){
    console.log("lalalllla lalalllla")
}
console.log(sing.prototype)
sing.prototype.abc="this book for kids"// prototype help us e to create object

////////////
///////////////
///////////////exampl
// const userfunction={
//     function1:function(){ // 1st function
//         return ` ${this.name} rollno  ${this.rollno} belong to our college`
//     },
//     function2:function(){  //2nd function
//        if(this.marks<=40 && this.marks>0){
//         console.log("oops! try next time you are fail")}
//         else if(this.marks>=90 && this.marks<=100){
//             console.log("congratulation you are toper")
//         }
// else
// {
//     console.log(" well done! you are pass")
// } 
//     }

// }
/////eshme hmm pichle question  ko prototype she krege
function save(name,clas,rollno,section,marks){
    const student=Object.create(save.prototype)// ye ek khali object hai
    student.name=name,
    student.clas=clas,
    student.rollno=rollno,
    student.section=section,
    student.marks=marks
return student
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
    
const student1=save("neha","bca",6224,"B",6)
console.log(student1)
console.log(student1.function1()) //function hmesha functin ke name or()eshi bracket she call hota hai
console.log(student1.function2())

const student2=save("nitin","bca1",6215,"B",72)
console.log(student2)
console.log(student2.function1())
console.log(student2.function2())
 