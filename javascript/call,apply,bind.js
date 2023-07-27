//.call ,.apply,.bind
const user1={
    name:"jhk",
    age:90,
    function: function(hoppy,favcolor){
        console.log(this.name,this.age,hoppy,favcolor)
    }
}
const user2={
    name:"oop",
    age:10,
}
user1.function.call(user2,"cooking","red") //.call ka use krke hmm about of user1 or user2 ke liye bhi use kr shkte hai
 //apply()method
 user1.function.apply(user1,["cooking","yellow"])//apply bhi .call ki trh hu kam krta hai bus eshe parameters ko '[]'array mai pass kete hai

 //bind()method:-function return krtta hai or data ko store krta hai
 //the bind method  eturn a new function when invoke has its this sets to a specific value
 const funs=user1.function.bind(user2,"readingh","green")
funs()
