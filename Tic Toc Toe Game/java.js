console.log("welcome to game")
let turnsound=new Audio("ting.mp3")
let gameover=new Audio("game-over.mp3")
let turn="X" 
let isgameover=false
  const changeTurn=()=>{
    return turn==="X"?"0":"X"  
}
   const checkforwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    
    let win=[

        [0,1,2,5,15,0],
        [3,4,5,5,5,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won " 
            isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            document.querySelector(".line").style.transform="20vw";
            document.querySelector(".line").style.transform=`translate(${e[3]})vw,${e[4]}vw rotate(${e[5]}deg)`
        }
    })

}
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
let boxtext=element.querySelector('.boxtext')
element.addEventListener('click',()=>{
    if(boxtext.innerText ===''){
    boxtext.innerText=turn;
    turn=changeTurn()
    turnsound.play();
    checkforwin()
    if(!isgameover){
    document.getElementsByClassName("info")[0].innerText="turn for " + turn;
    }
}
})
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{

        element.innerText=""
    })
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})