//map:-->the map is a collection of element where each element is stored as a key value pair
let get=new  Map()
get.set("name","neha")/// we can use set method to set the values in the map
get.set("age",21)
get.set("id",234)
console.log(get)
/// we can also write that
let info=new Map([
    ["name","neha"],
    ["age","20"],
    ["work","front end developer"]
])
console.log(info)

//add the data in object
const person={
    id:1,
    name:"neha"
}
const person1={
    id:2,
    name:"nitin"
}
/// agr hmm eshme kuch rxtra data bhi add krna hai to wo hmm ehs she kr shkte hai
const info2=new Map()
info2.set(person, {age:28,gender:"female",salary:56000})
info2.set(person1, {age:20,gender:"male",salary:5000})
console.log(person.name)
console.log(typeof info2)
console.log(info2.get(person).age)
console.log(info2.get(person1).gender )

