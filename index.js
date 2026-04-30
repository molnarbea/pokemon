
import Info from "./Info.js";
import Pokemon from "./Pokemon.js";
import Services from "./Services.js";

const kepElem = document.querySelector(".kep");
const infoElem = document.querySelector(".info")



let obj = {};
const services = new Services();

services.getAdat("https://pokeapi.co/api/v2/pokemon/12/", kepMegjelenit);

function kepMegjelenit(data){
    obj = data;
    new Pokemon(data,0,kepElem)
}

window.addEventListener("kattint",function(){
    new Info(obj, infoElem);
 
})