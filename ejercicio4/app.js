let click=function(event){
    console.log(event);
}
document.getElementById("btntoclick").addEventListener("click",click)







const focus = document.querySelectorAll("input");

for (const element of focus) {
    

element.addEventListener("focus", (focus)=>{
    console.log(element.value)
});
}







const input = document.querySelectorAll("input");

for (const element of input) {
    
    element.addEventListener("input", (input)=>{
        console.log(element.value)
    });
    }






    

const ul=document.createElement("ul")
document.body.appendChild(ul);
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
for(const album of albums){
    const list = document.createElement("li");
    list.textContent=album;
    ul.appendChild(list);
}
