// create.object() static method create a new object using an existiong object as the prototype of the newly create object
// eshki help she  hmm ek object ke key value ko dushre obj mai bhi access kr shkte hai
//proto:---eshe refereence hoti hai kishi or object ki 
const obj1={
    key1:"name",
    key2:"class"
}
const obj2=Object.create(obj1) // hmm obj 1 ki value ko access kr payege
obj2.key3="rollno"
console.log(obj2)
///proto hme phle obj ke address tk lekr jayega
//



//examp
const userfunction={
    function1:function(){ // 1st function
        return ` ${this.name} rollno  ${this.rollno} belong to our college`
    },
    function2:function(){  //2nd function
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

}
function save(name,clas,rollno,section,marks){
    const student=create.Object(userfunction)//ye reference le rha hai proto she// ye ek khali object hai
    student.name=name,
    student.clas=clas,
    student.rollno=rollno,
    student.section=section,
    student.marks=marks
    student.function1=userfunction.function1;
    student.function2=userfunction.function2

return student
}
const student1=save("neha","bca",6224,"B",6)
console.log(student1)
console.log(student1.function1()) //function hmesha functin ke name or()eshi bracket she call hota hai
console.log(student1.function2())

const student2=save("nitin","bca1",6215,"B",72)
console.log(student2)
console.log(student2.function1())
console.log(student2.function2())
 