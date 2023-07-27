//funtion in javascipt
function swap(a,b){
let temp
temp=a
a=b
b=temp
console.log("after swaping the value:"+a)
console.log("after swaping the value:"+b)
}
let x=50
let y=100
console.log("Before swaping the value the x: "+x)
console.log("Before swaping the value the y: "+y)
swap(x,y);

//sum of three number
function sum(num1,num2,num3)
{
    console.log("sum of three number is:",num1+num2+num3)
}
let a=400;
let b=500;
let c=600;
sum(a,b,c);

//write a program to find enven or odd and display true and false in output
function find(num1){
    if(num1%2==0)
    {
       return true
    }
    else
    {
        return false
    }
}
let no
no=10
console.log(find(no))