function getchees(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const chees="🧀"
        // resolve(chees)
        reject("sorry we have no chees")
        },2000)
    })
}
function getdough(chees){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough="🧇"
            resolve(dough)
        },2000)
    })
}
function getpizza(dough){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const pizza="🍕"
        resolve(pizza)
   },2000)
 })
}
getchees()
.then((chees)=>{
    console.log("here is your chees",chees)
    return getdough(chees)
}).then((dough)=>{
    console.log("here is dough",dough)
    return getpizza(dough)
}).then((pizza)=>{
    console.log("here is your pizza",pizza)
}).catch((data)=>{
    console.log("oops sorry for error",data)
}).finally(()=>{
    console.log("thank you for buying the pizza")
})
