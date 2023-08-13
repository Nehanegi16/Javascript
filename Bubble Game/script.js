 var timer=5
let hitbtn=0
let score=0
let clickbub

const makebubble=()=>{
 for(let i=1;i<=151;i++){
    let rn=Math.floor(Math.random()*10)
 document.getElementById("pbtm").innerHTML += `<div class="bubble">${rn}</div>`;
 }
}


function hit(){

   hitbtn=Math.floor(Math.random()*10)
   document.getElementById("hitbtn").innerHTML=hitbtn
 }

function runtimer(){
   const settime= setInterval(function(){
      if(timer>0){
      timer--;
      document.getElementById("timervalue").innerHTML=timer
   } 
   else
   {
     clearInterval(settime)
     document.getElementById("pbtm").innerHTML=""
     document.getElementById("timervalue").innerHTML=""
    //  startgame()
   }
   },1000)

}

function scorebtn(){
   score+=10
   document.getElementById("scorebtn")
   .innerHTML=`your score is ${score}`
   document.getElementById("scorebtn").innerHTML=score

}  
// function startgame(){
//   document.getElementById("pbtn").innerHTML=`<button id='btn'>Start Again</button>`
//   document.getElementById("btn").addEventListener("click",function(ev){
//    const go= (ev.target.innerHTML)
//    if(go!=hitbtn && go!=scorebtn)
//     runtimer() 
//     makebubble()
//     hit()

//   })

// }
document.getElementById("pbtm").addEventListener("click",(event)=>{
  clickbub=Number(event.target.textContent)
    if(clickbub===hitbtn){
      makebubble()
      hit()
      scorebtn()
  
    }  
    else{
      document.getElementById("pbtm").innerHTML=`<h1>🥹 game over </h1`
      document.getElementById("timervalue").innerHTML="game over"
     
 
    } 
    
})
runtimer() 
makebubble()
hit()



