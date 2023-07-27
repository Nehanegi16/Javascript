//clone assign object.assing
/* using tree type we can perform cloning
1:-using spread(...)syntax (new) 
2:-use the object.assign()method (old)
3:-use the JSON.stringify()
*/
 const obj1={
    key:"krishna",
    key1:"radika"
 }
 const obj2={...obj1}//(...)->enka use krte hai cloning ke liyeagr hmm chahte hai ki hmm jo ek obj mai add kre wo dushre mai na ho to eshke liye cloning use krte hai
 obj1.key3="me"
 console.log(obj1)
 console.log(obj2)
  
const obj3=Object.assign({},obj2);
obj2.key3="namo nmh"
console.log(obj2)
console.log(obj3) 