///arrry program
let arr=[90,80]
let an=prompt("enter any number")
an=Number.parseInt(an)
arr.unshift(an)
console.log(arr)

///program2
let detail=[
    {name:"jony",age:28},
    {name:"janvi",age:16},
    {name:"tina",age:26},
    {name:"kitu",age:15}
];
let show=detail.filter((user)=>{
    return user.age;

})
console.log(show)

//program 3:-check whether the input data is array or not
let arr1=(input)=>{
    if(Array.isArray(input)) // using array.isarray() we can find that our data is array or not
    return true
    return false
}
console.log(arr1('neha negi'));
console.log(arr1(["neha","negi"]))

//program4:-copy one array to another
let arr2=[1,2,3,4,5,6]
console.log(arr2)
let arr3=arr2.filter((clone)=>{
    return clone
})  
console.log(arr3)

//program5:- join the array
let arr4=["red","green","blue","black"]
let a=arr4.toString()
a=arr4.join("+")
console.log(a)

//program

 