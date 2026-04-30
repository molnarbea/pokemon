import Pokemon from "./Pokemon.js";

export default class Pokemonok {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
     this.szuloElem.innerHTML = "";
    this.megjelenit();
  }
  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new Pokemon(elem, index, this.szuloElem);
    });
  }
}
