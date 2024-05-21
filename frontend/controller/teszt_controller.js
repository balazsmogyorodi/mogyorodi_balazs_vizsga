import Teszt from "../model/teszt.js";
import Feladat from "../view/feladat.js";

class Teszt_controller{
    #teszt_feladatok = []
    #teszt;
    constructor(adatok){
       this.#teszt = new Teszt(adatok.length);
        for (let index = 0; index <adatok.length; index++) {
           this.#teszt_feladatok[index] = new Feladat(adatok[index]);   
        }
    }


}
export default Teszt_controller;