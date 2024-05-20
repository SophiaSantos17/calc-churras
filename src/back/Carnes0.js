export default class Carnes0{
    static bovina = false;
    static suina = false;
    static frango =  false;

    static toggleBovina() {
        Carnes0.bovina = !Carnes0.bovina
        console.log(Carnes0.getValores())
    }

    static toggleSuina() {
        Carnes0.suina = !Carnes0.suina
        console.log(Carnes0.getValores())

    }

    static toggleFrango() {
        Carnes0.frango = !Carnes0.frango
        console.log(Carnes0.getValores())

    }

    static getValores() {
        return {
            bovina : Carnes0.bovina,
            suina : Carnes0.suina,
            frango : Carnes0.frango,

        };
    }

}