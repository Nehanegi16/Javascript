/*
for loop
for in loop
for of loop
while loop
do while loop */

//FOR LOOP
let num=prompt("Enter any number of your choice:" )
num=Number.parseInt(num)
let fact=1;
for(let i=1;i<=num;i++)
{
    fact*=i;  
}
console.log("you enter the number is:",num)
console.log("factorial of" +num+ "is " +fact)

//FOR IN LOOP
let obj={
neha:34,
nitin:89,
jeevan:90,
ishika:09
}
for(let a in obj)
{
    console.log("class 10th student name is:"+a+ " ","and marks is :"+obj[a])
}

//FOR OF LOOP
for(let b of "neha negi")
{
    console.log(b)
}

//while loop
let num1=prompt("Enter any number of your choice:" )
num1=Number.parseInt(num1)
let i=1;
while(i<num1)
{
    console.log(i)
    i+=1 
}

//DO while loop
let num2=5
let no=1;
do{
    console.log(no)
    no+=1 
}
while(no<=num2)
