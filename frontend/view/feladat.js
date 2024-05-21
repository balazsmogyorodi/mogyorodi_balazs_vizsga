import Input from "./input.js";

class Feladat{
    #value;
    #angol;
    #magyar;
    #id;
    #divElem
    #inputElem;

    constructor(adatok){
        this.#id = adatok.id;
        this.#angol = adatok.angol;
        this.#magyar = adatok.magyar;
        this.#value = "";
        const divElem = $(".teszt");
        divElem.append("<div class='feladat_resz'></div>");
        this.#divElem = divElem.children(".feladat_resz:last-child");
        this.#felepito();
        $("#txt_name").on("keyup", () =>{
            
           
          });
    }


 

    #felepito(){
       this.#inputElem = new Input(this.#magyar);
        this.#divElem.append(`
        <div class="feladat">
    <div>${this.#angol}</div>
    <div>${this.#inputElem.kiiro()}</div>
    <div class='eredmeny'></div>
        </div>`);





    }

}
export default Feladat;