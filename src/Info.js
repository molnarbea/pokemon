export default class Info{
    #obj={};
    constructor(obj, szuloElem){
        this.#obj=obj
        this.szuloElem=szuloElem
        this.szuloElem.innerHTML = "";
        this.megjelenit();
    }

    megjelenit(){
        let kod = `
        <div>
        <h2>Név: ${this.#obj.name}</h2>
        <p>ID: ${this.#obj.id}</p>
        <p>Order: ${this.#obj.order}</p>
        <p>Height: ${this.#obj.height}</p>
        <p>Weight: ${this.#obj.weight}</p>
        </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

}
