//array map method:---->map create a new array by performing some operation on each array element
let arr=[78,9,66,99,100]
let a=arr.map((value,index,array)=>{/// we use map with arrow function and we can use all three function
console.log(value,index)
return value+1 
})
console.log(a)

///array filter method:--->filter an arry with value that passes a test create a new arra
let arr2=[89,4,5,6,7,32,45,66]/// ye method hmare  original array ko change nhi krte 
let a2=arr2.filter((a)=>{
return a<50// ye hme 10 she chhoti value hi return krega
})
console.log(a2)

//array reduce method:----->
let arr3=[1,2,3,4,5,6,7]//ye pali or dusri value ko lekr pluse krega
let newarr=arr3.reduce((h1)=>{
    return h1 
})
console.log(newarr) 