export default class Pokemon{
    #obj = {};
    #index = 0;
    constructor(obj={ }, index, szuloElem){
        this.#obj = obj;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemeny();
    }
 
    sajatEsemeny(){
        const e = new CustomEvent("kattint",{detail:this.#index});
        window.dispatchEvent(e);
    }
    esemeny(){
        const kepElem = document.querySelector(".kartya:last-child img");
            kepElem.addEventListener("click", ()=>{
            console.log("index ", this.#index);
            this.sajatEsemeny();
        });
    }
megjelenit(){
        let kod = `<div class="kartya"><img src="${this.#obj.sprites.front_default}" alt="${this.#obj.sprites.front_default}"></div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
 
getObj(){
        return this.#obj;
    }
}
