//create li function and pass tha data on it
function addli(language){
  const li=document.createElement("li")
  li.appendChild(document.createTextNode(language))

  document.querySelector('.language').appendChild(li)
}
addli('java')
 addli('python')
 addli('c++')
 addli('html')


//edit element
 const Edit=document.querySelector('li:nth-child(2)')
 const newtext=document.createElement('li')
 newtext.textContent="react"
 Edit.replaceWith(newtext)

 //2nd editing option
 const Edit2=document.querySelector("li:first-child")
 Edit2.outerHTML="<li>hello word</li>"

 //remove element
const removechild=document.querySelector("li:last-child")
removechild.remove()