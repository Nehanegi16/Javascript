const clock=document.getElementById("clock")
 setInterval(()=>{
    let date=new Date() ///date method
    
    clock.innerHTML=date.toLocaleTimeString();
    clock.style.fontSize="50px"

 },1000);