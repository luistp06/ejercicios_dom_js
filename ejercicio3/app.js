
const ul=document.createElement("ul")
document.body.appendChild(ul);
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
for(const country of countries){
    const list = document.createElement("li");
    list.textContent=country;
    ul.appendChild(list);
}



const removeelement = document.querySelector(".fn-remove-me")
    removeelement.remove();





    const printhere=document.querySelector(`[data-function="printHere"]`)
    const ul2=document.createElement("ul")
    printhere.appendChild(ul2);
    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
    for(const car of cars){
        const list2 = document.createElement("li");
        list2.textContent=car;
        ul2.appendChild(list2);
    }






    const countries2 = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];
    for (const country of countries2) {
        const divc = document.createElement("div");
        const h4 =document.createElement("h4");
        const img=document.createElement("img");
        const button2 =document.createElement("button")
        h4.innerText=country.title;
        img.src=country.imgUrl;
        button2.innerText="Borrar este elemento";
 document.body.appendChild(divc)
 divc.appendChild(h4)
 divc.appendChild(img) 
divc.appendChild(button2)

button2.onclick= function(){
    divc.remove()
}


}





const button =document.createElement("button")
document.body.appendChild(button)
button.innerText="Borrar";

button.onclick= function(){
    const alldivs= document.querySelectorAll("div")
    alldivs[alldivs.length-1].remove()
}







    