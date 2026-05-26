/**
 * @class Services
 * @classdesc API hívások kezelésére szolgáló osztály.
 */
export default class Services {
    
    /**
     * Létrehoz egy új Services példányt.
     */
    constructor() {
    }

    /**
     * Adat lekérése egy megadott végpontról.
     * @param {string} vegpont - Az API végpont URL-je.
     * @param {function} callback - A visszahívó függvény, amely megkapja a lekért adatot.
     */
    getAdat(vegpont, callback) {
        fetch(vegpont)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                callback(data);
            })
            .catch(error => console.log(error));
    }
}
