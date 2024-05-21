import Data from "../model/data.js";
import Select from "../view/select.js";

class Select_controller{

    constructor(adatok){
      
        const selecter = new Select(adatok);
        selecter.getSelectElem().on('change', (e)=> {
            console.log(e.val())
            const data = new Data();
            selecter.setValue(e.target.val())
            console.log(selecter.getValue())
            if(selecter.getValue() == "minden"){
                data.getData(`http://127.0.0.1:8000/api/temak`, this.tesztFeltolto);
            } else{
                data.getData(`http://127.0.0.1:8000/api/temak/${selecter.getValue()}`, this.tesztFeltolto);
            }
          
        });
    }


    tesztFeltolto(data){
        $(".tesztelo").remove();
        $("article").append(`<div class="tesztelo">
        <div class="fejLec">
    <div>ANGOL</div>
    <div>MAGYAR</div>
    <div class='vissza'>visszajelzés</div>
        </div></div>`)
        new Teszt_controller(data);
    }
    


}
export default Select_controller;