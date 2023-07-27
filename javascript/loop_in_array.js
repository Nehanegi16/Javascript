 let str=[78,98,34,33,45]
for(let i=0;i<str.length;i++)
{
    console.log(str[i])
}

// for each loop
str.forEach(element => { ///it work as array function
    console.log(element*element)
});

//array.from:---->use to convert the simple element into array
let name="neha"
let arr=Array.from(name) ///we need to first declare one variable in which we store our array
console.log(arr)

//for.....of loop :---->is use access the whole element of thed array
for(i of str){
    console.log(i)
}

//for.....in loop:--->it use to access the key of the array
for(m in str){
    console.log(m)
}  