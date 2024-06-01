const divt= document.createElement("div")
const divp= document.createElement("div")
const divloop= document.createElement("div")
const p= document.createElement("p")
const p1= document.createElement("p")
p.innerText= "parrafo";
p1.innerText= "parrafo";
document.body.appendChild(divp);
document.body.appendChild(divt);
document.body.appendChild(divloop);


const parrafos=["parrafo1", "parrafo2", "parrafo3", "parrafo4", "parrafo5", "parrafo6"]
    for(parrafo of parrafos){
        parrafo=document.createElement("p")
    divt.appendChild(parrafo);
    parrafo.innerText= "parrafo";}

    divp.innerHTML=`<p>Soy dinamico</p>`
   



    const h2=document.querySelector("h2");
    h2.innerText= "Wubba Lubba dub dub";
    




let textoH2 = document.createTextNode("Wubba Lubba dub dub");
const ul=document.createElement("ul")
document.body.appendChild(ul);
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for(const app of apps){
    const list = document.createElement("li");
    list.textContent=app;
    ul.appendChild(list);
}


const erased= document.querySelectorAll(".fn-remove-me")
 for (element of erased) {
    element.remove();
};


const mid =document.createElement("p")
mid.innerText= "Voy en medio!";
divt.insertAdjacentHTML("beforebegin", "<p>Voy en medio!</p>");



let insert = document.querySelectorAll(".fn-insert-here"&&"div")
for (element of insert){
element.insertAdjacentHTML("beforeend", "<p>Voy dentro!</p>");
}