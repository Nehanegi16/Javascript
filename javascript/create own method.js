//method:--->(function inside object) javascript method are action that can be performed on object
/* in javascript the 'this' keyword refers to an object
this keyword ka use hmm function ke bahr ke variable ko access krne ke liye krte hai
*/
const person={
    firstname:prompt("enter the name"),
    age:prompt("enter the age"),
   about: function(){ //key value function hmmee about(){}ehse bhi likh shkte hai
    console.log(`person name is ${this.firstname} and age is ${this.age}`)

   }
}
person.about()//calling function
//window object
console.log(this)