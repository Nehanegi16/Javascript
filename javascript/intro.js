console.log("hello world2"); //print any message on screen 
var firstname="neha" //variable declaration

console.log(firstname); // calling variable
var num1=10; // integere declaration
console.log(num1/5);  

const pi=3.15;           // declare constants and  const value can not be changed 
console.log(pi*2);

// string indexing
let fname="neha negi";
console.log(fname[0]);
console.log(fname.length) // to check the length og the char
console.log(fname[fname.length-3]) // this is use when we did not know the lenght of the character

//string method
//trim   /// trim is use to remove the extra spaces
//trimstart method is use to remove the whitespace from the the starting of the string
// trimend method is use to rmove the whitespace from the the end of the string
let fname1="   NehaNegi  "
console.log(fname1.length);
console.log(fname1)
console.log(fname1.trim())

//to uppercase()
console.log(fname1.toUpperCase())

// to lowercase()
console.log(fname1.toLowerCase())

//slice()
// start index and end index
let newstring=fname1.slice(0,4)
console.log(newstring);

//typeof use to check the data type
let age=28;
let fname2="nitin";
console.log(typeof age);
console.log(typeof fname2);

// convert number into string
age=age+"";
console.log(typeof age);

// convert string into number
let mystr=+"34" //"34" is string but after puting + symbol on front on the 34 it convert it into number
console.log(typeof mystr)

let age1="18";
age1=Number(age1); //we can also convrt the datatyo+pe like this
console.log(typeof age1); 

//using templet string
let age2=20;
let myname="neha";
let about=`my name is ${myname} and my age is ${age2}` //${} is user to take the value from variable without using any doublequte or single qourt
//``this backslash symbol is use with templet
console.log(about);
 
//escap sequence character
let fruits='over\'s' // we can use it as words like people's
console.log(fruits)

//for new line we can use \n ,\t, \r
let name="my name is neha and \ni purshuing my bca from chandigarh"
console.log(name)

// replace
console.log(myname.replace("neha","niki"))
console.log(myname)//string is immutable mean it real  value will not change

//concat
let fname3="tiya"
console.log(myname.concat(" is the good friend of"+fname3))

//sunbstr
let str="apple ,banana, kiwi"
console.log(str.substr(9)) //give index number from where you want print the string

//padstart :-it pads the string with another string(multipla times)until it reachs a given length
//padend:- as same as pad start but add the string in the end of the string
let str1="5"
console.log(str1.padStart(5,"neha"))// use to adding the string in starting
 
//split:-convert the string into array
let  sp="neha"
console.log(sp.split())
console.log(typeof sp)

//substring
let str2="hello everyone code is not dificult as you can see"
console.log(str2.substring(50 )) 