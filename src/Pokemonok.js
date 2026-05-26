import Pokemon from "./Pokemon.js";

/**
 * @class Pokemonok
 * @classdesc Több Pokémon megjelenítéséért felelős osztály.
 */
export default class Pokemonok {

  /**
   * @private
   * @type {Array<Object>} A Pokémonok listája.
   */
  #lista = [];

  /**
   * Létrehoz egy új Pokemonok példányt.
   * @param {Array<Object>} lista - A Pokémonokat tartalmazó tömb.
   * @param {HTMLElement} szuloElem - A szülő DOM elem, ahova a Pokémonok kerülnek.
   */
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = "";
    this.megjelenit();
  }

  /**
   * Végigiterál a listán és létrehozza az egyes Pokémon elemeket.
   */
  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new Pokemon(elem, index, this.szuloElem);
    });
  }
}