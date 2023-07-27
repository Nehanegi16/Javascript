let marks={
    neha:89,
    priti:8,
    shuruti:89
}
for(i=0;i<=Object.keys(marks).length;i++){
console.log("marks of"+Object.keys(marks)[i]+"are"+marks[Object.keys(marks)[i]])
}
/// find the mean usibg function
const mean=(a,b,c,d)=>{ //arrow function
    return(a+b+c+d)/4
}
console.log(mean(7,8,10,38))