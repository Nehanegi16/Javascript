///array are use to hold the more tha one value ans store tha same type data
let marks=[91,82,63,64,null,true,90]
 console.log(marks[0])
 console.log(marks[1])
 console.log(marks[2])
 console.log(marks[3])
 console.log(marks[4])
 console.log(marks[5])
 console.log(marks[6])
 console.log(marks.length)
marks[4]=55 //we can change the array because the arra is mutalble
marks[5]=77

////for loop in array

console.log("know were are printing arary using for loop")
console.log(marks[4])
for(i=0;i<marks.length;i++)
{
    console.log(marks[i])
}

///Array method
// tostring:----->it convert the array into the string
let num=[1,2,3,4,5,6]
let b=num.toString()//hmen eshe dushre variable mai eshliye rkha hai kuki agr num mai hi rkhte to ye output mai hme object show krta data type ke bjaye weshe eshe bhi ho jata hai pr hmne eskki data type check krne ke liye eshe kiya
console.log(b)
console.log(typeof b)

//join method:---->use to add the information it betwwen the value
let c=num.join(" and ")
console.log(c)

//pop mathod:--->use to remove the elment from the last
let no=[10,20,30,40,50]
no.pop()
console.log(no)
let r=num.pop()
console.log(r)// is use to return the pop element
console.log(no)

//push mathod:---> use to return the new array length
let no1=[1,2,3,4,5]
no1.push()
console.log(no1)
let r1=no1.push(6)
console.log(no1)

//shift:-->use to remove the first emplent an dreturn it
let no2=["neha","priti","tanya","subh"]
no2.shift()
console.log(no2)

//ushift:---->use to add the element in the beging 
let no3=["subh","kriti","lubhansi","tina"]
no3.unshift("neha")
console.log(no3)

//delete:--> use to delete the element from the array
//note:-but performing delete operation on array element not affect the length ogf the array
let arr=[89,49,49,80,90]
console.log(arr)
delete arr[0]
console.log(arr.length)
console.log(arr)

//concat:-->use to join to array and it does not change exit array
let arr1=[89,49,49,80,90]
let arr2=[99,45,33,22,97,08]
let arr3=[09,11,12,13,14]
let new_arr=arr1.concat(arr2,arr3)
console.log(new_arr)

//sort:--->use to short the array alphabaticaly and it modify origanal array
let compare=(a,b)=>{//arrow function and is use to sort according the number
return a-b // for accending order sorting
//return b-a for desending order sorting
}
let num1=[89,77,56,44,234,09] //it sort like alfabet like two,three four and so on nut not sort like number
num1.sort(compare)
console.log(num1)

//reverser:--->ulta kr deta hai
num1.reverse()
console.log(num1)

//splice :--->use to add item in the array ,delete the item in array and modifies the item in array
let no4=[90,100,101,102,103,104,105]
no4.splice(2,4,106,107,108) //in splice first yani 2 emlement is index where you start your array
                            //second yani 4 btata hai ki array she kitne item delet krne hai
                            //and last mai hmm kitni bhi item pass kr shkte hai jo hme array mai add krwani hai
console.log(no4)

//slice:-->it use pick tha item with start and end element
// in it lat element not considered
let number1=no4.slice(2,4)
console.log(number1)
no4.splice()

//find:-->use to fins the element in the array that satisfy the provide condition
const emp=[
    {name:"suman",salary:"25000"},
    {name:"madan",salary:"45000"},
    {name:"gulab",salary:"20000000"}
]
//emp.find((detale)=>detale.name=="suman") also write like that
const show2=emp.find((user)=>{
    return user.name=="suman"
})
console.log(show2)

//every method:-----every method return boolean value
// or ye tbhi true dega jb sare number true hoge nhi to false dega
const number2=[8,6,20,646,90,34]
const find=number2.every((n)=>n%2==0);
console.log(find)


//progem:-for evert method
const pro=[
    {proname:"mobile",price:"45000"},
    {proname:"laptop",price:"25000"},
    {proname:"pen",price:"800"}
]
const find1=pro.every((check)=>check.price<10000)
console.log(find1)

//some method:--it is use to check the whether at least one of element of the array satisfy the condition
const product=[
    {proname:"mobile",id:"10"},
    {proname:"laptop",id:"100"},
    {proname:"pen",id:"1000"}
]
const k=product.some((k2)=>k2.id>999)
console.log(k)

//fill method:-->is use to fill the array with a given static value
//eshme (value,start,end) paramenters hote hai value hme ye btata hai ki hme array elment ko kish she replace krna hai
// fill method orignal array ko chang krtakrta ahi
const new2=[3,4,5,7,8,9]
new2.fill(10,0,3)
console.log(new2)
