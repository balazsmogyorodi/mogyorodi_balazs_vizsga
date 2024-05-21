class Teszt{
    #feladatMennyiseg;
    #pontSzam;
    constructor(feladatMennyiseg){
        this.#feladatMennyiseg = feladatMennyiseg;
        this.#pontSzam = 0;
    }


    getMennyiseg(){
        return this.#feladatMennyiseg;
    }

    getPontSzam(){
        return this.#pontSzam
    }



}
export default Teszt;