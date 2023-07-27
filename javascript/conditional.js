/* javascript has three
conditional statement 
if statement
if...........else statement
if....else if......else statement */
let a=prompt("Enter any valid number") //prompt is use to taking the input to the user
a=Number.parseInt(a);
if(a<0)
{
    alert("please enter the valid number");
}
else if(a<=10)
{
    alert("your entry as a kind");
}
else if(a<20 && a>=15)
{
    alert("your enter as a adult");
}
else
{
alert("oops! sompting wrong");
}
console.log("we are helping for regstration please enter the valid number");

//switch statement

let week=prompt("enter the week number")
week=1
switch(week)
{
case 1:
    alert("today is monday")
    break;
    case 2:
        alert("today is tusday")
        break;
        case 3:
            alert("today is wednessday")
            break;
            case 4:
                alert("today is thursday ")
            default:
                alert("enter the valid number")

}

//ternary oprator
let age=10
console.log("you can",(age<=18?"not drive":"drive"))