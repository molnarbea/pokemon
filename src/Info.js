/**
 * @class Info
 * @classdesc Egy kiválasztott Pokémon részletes adatainak megjelenítéséért felelős osztály.
 */
export default class Info {

    /**
     * @private
     * @type {Object} A kiválasztott Pokémon adatai.
     */
    #obj = {};

    /**
     * Létrehoz egy új Info példányt.
     * @param {Object} obj - A Pokémon adatai.
     * @param {HTMLElement} szuloElem - A szülő DOM elem, ahol az információ megjelenik.
     */
    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }

    /**
     * A Pokémon részletes adatainak megjelenítése a DOM-ban.
     */
    megjelenit() {
        let kod = `
        <div class="info-kartya">
            <h3>Név: ${this.#obj.name}</h3>
            <p>ID: ${this.#obj.id}</p>
            <p>Order: ${this.#obj.order}</p>
            <p>Height: ${this.#obj.height}</p>
            <p>Weight: ${this.#obj.weight}</p>
        </div>
        `;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}
