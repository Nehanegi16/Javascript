const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault(); ///this method cancels the event if it is cancelable,meaning that the default action that belongs to the event will not occure
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector("#result")
    if(height==="" ||height<0 ||isNaN(height)){
        result.innerHTML=`please give a vaid height ${height}`
    }
    else if(weight===''|| weight<0|| isNaN(weight)){
        result.innerHTML=`please give a vaild weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`

        const head=document.querySelector("#change")
         if (bmi<=18.6){
            head.innerHTML="Underweight"
        }
        else if(bmi==18.6 || bmi<24.9)
        head.innerHTML="Healthy Weight"
        else{
            head.innerHTML="Overweight"
        }
    }
    

    
}) 