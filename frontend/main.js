import Select_controller from "./controller/Select_controller.js";
import Teszt_controller from "./controller/teszt_controller.js";
import Data from "./model/data.js";

$(function(){
    new Main();



    
})

class Main{
    constructor(){
        const data = new Data();
        data.getData("http://127.0.0.1:8000/api/temak", this.#selectElemLetrehozo);
        data.getData("http://127.0.0.1:8000/api/szavak", this.#tesztFeltolto);

    }


    #tesztFeltolto(data){
        $("article").append(`<div class="teszt">
        <div class="fejLec">
    <div>ANGOL</div>
    <div>MAGYAR</div>
    <div class='vissza'>visszajelzés</div>
        </div></div>`)
        new Teszt_controller(data);
    }


    #selectElemLetrehozo(data){
        new Select_controller(data);
    }


}
