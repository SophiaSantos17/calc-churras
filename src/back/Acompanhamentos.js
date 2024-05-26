export default class Acompanhamentos{
    static arroz = true;
    static farofa = true; 
    static pfrances = true;
    static paoDeAlho = false;
    // static acompanhamentos = {'Arroz': true, 'Farofa': true, 'Pão Francês': true, 'Pão de Alho': false}

    static toggleArroz(){
        Acompanhamentos.arroz = !Acompanhamentos.arroz
        console.log(Acompanhamentos.getValores())
    }

    static toggleFarofa(){
        Acompanhamentos.farofa = !Acompanhamentos.farofa
        console.log(Acompanhamentos.getValores())
    }

    static togglePFrances(){
        Acompanhamentos.pfrances = !Acompanhamentos.pfrances
        console.log(Acompanhamentos.getValores())
    }

    static togglePaoDeAlho(){
        Acompanhamentos.paoDeAlho = !Acompanhamentos.paoDeAlho
        console.log(Acompanhamentos.getValores())
    }
    static getValores() {
        return {
            arroz : Acompanhamentos.arroz,
            farofa: Acompanhamentos.farofa,
            pfrances: Acompanhamentos.pfrances,
            paoDeAlho : Acompanhamentos.paoDeAlho,
        };
    }
}
