
import Info from "./Info.js";
import Pokemon from "./Pokemon.js";
import Services from "./Services.js";

const kepElem = document.querySelector(".kep");
const infoElem = document.querySelector(".info")



let obj = {};
const services = new Services();

services.getAdat("https://pokeapi.co/api/v2/pokemon/12/", kepMegjelenit);

let id = 0;

function kepMegjelenit(data){
    obj = data;
    new Pokemon(data,id,kepElem)
    id++;
}

window.addEventListener("kattint",function(){
    console.log(obj);
    new Info(obj, infoElem);
 
})