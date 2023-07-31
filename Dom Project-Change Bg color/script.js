const btn=document.querySelectorAll(".colors")
const body=document.querySelector("body")

btn.forEach(function(button){
    console.log(button)
    button.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target.id == 'red'){
            body.style.backgroundColor=e.target.id
            
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor=e.target.id
            
        }
     
        if(e.target.id == 'green'){
            body.style.backgroundColor=e.target.id
            
        }
     
        if(e.target.id == 'pink'){
            body.style.backgroundColor=e.target.id
            
        }
     
     
    })
})