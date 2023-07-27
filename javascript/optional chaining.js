/*optional chaining:-->the optinal chaining '?.' is an error-proof way to access nested object property 
even if an intermediate property does't exit
*/
const user={//object creation
 name:"alia",
 class:"bca"
}
console.log(user?.dog?.name)
console.log(user.name) //hmm ek sath comment ctr+question marks she kr shkte the
