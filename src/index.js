import Info from "./Info.js";
import Pokemon from "./Pokemon.js";
import Services from "./Services.js";

/**
 * A Pokémon kép megjelenítésére szolgáló DOM elem.
 * @type {HTMLElement}
 */
const kepElem = document.querySelector(".kep");

/**
 * A Pokémon részleteinek megjelenítésére szolgáló DOM elem.
 * @type {HTMLElement}
 */
const infoElem = document.querySelector(".info");

/**
 * Az aktuális Pokémon objektum.
 * @type {Object}
 */
let obj = {};

/**
 * Services példány az API hívásokhoz.
 */
const services = new Services();

/**
 * Az aktuális Pokémon indexe.
 * @type {number}
 */
let id = 0;

/**
 * API hívás indítása.
 */
services.getAdat("https://pokeapi.co/api/v2/pokemon/12/", kepMegjelenit);

/**
 * A kép megjelenítéséért felelős callback függvény.
 * @param {Object} data - Az API-ból kapott Pokémon adat.
 */
function kepMegjelenit(data) {
    obj = data;
    new Pokemon(data, id, kepElem);
    id++;
}

/**
 * Saját esemény figyelése (kattintás Pokémonra).
 * Megjeleníti a kiválasztott Pokémon adatait.
 */
window.addEventListener("kattint", function () {
    console.log(obj);
    new Info(obj, infoElem);
});