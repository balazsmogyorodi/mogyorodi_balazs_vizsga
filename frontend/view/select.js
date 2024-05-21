class Select{
    #adatok;
    #selectElem;
    #value
    constructor(adatok){
        this.#value = "minden";
        const article = $("article");
        article.append("<select id='kategoriak'><option value='minden'>Válasz témát!</option></select>");
        this.#selectElem = article.children('#kategoriak:last-child');
        this.#adatok = adatok;
        this.#selectFelepito();
    }

    getValue(){
        return this.#value;
    }

    getSelectElem(){
        return this.#selectElem
    }

    setValue(value){
        this.#value = value;

    }


    #selectFelepito(){
        for (let index = 0; index < this.#adatok.length; index++) {
            this.#selectElem.append(`<option value="${this.#adatok[index].id}">${this.#adatok[index].temanev}</option>`);
            
        }
     
    }


}
export default Select;