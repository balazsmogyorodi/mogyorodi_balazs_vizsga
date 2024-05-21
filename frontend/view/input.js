class Input{
    #valasz
    #inputElem

    constructor(valasz){
        this.#valasz = valasz
        this
    }


    getValasz(){
        return this.#valasz
    }

    setInputElem(){
        this.#inputElem = $(".va")
    }

    kiiro(){
        return `        
        <input type="text" class="valaszlas"></input>`
    }
}
export default Input