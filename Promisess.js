let p=new Promise((res,rej)=>{
    let ren=Math.floor(Math.random()*10)
    if(ren>5){
        return res("yes that true")
    }
    else{
        return rej("no that no true")
    }
})
p
.then(()=>{
    console.log("o yes")
})
.catch(()=>{
    console.log("oops some thik wrong")
})
