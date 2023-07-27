let age=prompt("enter any number")
if(age>10 && age<20)
{
    console.log("your age lie between 10 and 20")
}
else
{
    console.log("somthig wrong")
}

///check the number is divisiable by 2 and 3
let num=prompt("enter the number")
num=Number.parseInt(num)
if(num%2==0 && num%3==0)
{
    console.log("your number is divisialbe by both")
}
else {
  console.log("your number is not divisialbe by both")
}


///check the number is either divisiable by 2 and 3
let num1=prompt("enter the number")
num1=Number.parseInt(num1)
if(num1%2==0 || num1%3==0)
{
    console.log("your number is divisialbe")
}
else {
  console.log("your number is not divisialbe by both")
}