/**
 * @class Pokemon
 * @classdesc Egy Pokémon megjelenítéséért és eseménykezeléséért felelős osztály.
 */
export default class Pokemon {

    /**
     * @private
     * @type {Object} A Pokémon adatai.
     */
    #obj = {};

    /**
     * @private
     * @type {number} Az elem indexe.
     */
    #index = 0;

    /**
     * Létrehoz egy új Pokemon példányt.
     * @param {Object} obj - A Pokémon adatai.
     * @param {number} index - A Pokémon indexe a listában.
     * @param {HTMLElement} szuloElem - A szülő DOM elem.
     */
    constructor(obj = {}, index, szuloElem) {
        this.#obj = obj;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemeny();
    }

    /**
     * Saját eseményt hoz létre és küld.
     */
    sajatEsemeny() {
        const e = new CustomEvent("kattint", { detail: this.#index });
        window.dispatchEvent(e);
    }

    /**
     * Eseménykezelő hozzárendelése a képhez.
     */
    esemeny() {
        const kepElem = document.querySelector(".kartya:last-child img");
        kepElem.addEventListener("click", () => {
            console.log("index ", this.#index);
            this.sajatEsemeny();
        });
    }

    /**
     * A Pokémon megjelenítése a DOM-ban.
     */
    megjelenit() {
        let kod = `
        <div class="kartya">
            <img src="${this.#obj.sprites.front_default}" alt="pokemon">
        </div>
        `;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    /**
     * Visszaadja a Pokémon objektumot.
     * @returns {Object}
     */
    getObj() {
        return this.#obj;
    }
}