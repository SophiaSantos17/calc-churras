export default class Carnes{
    static bovina = {'Picanha': false, 'Maminha': false, 'Costela': false}
    static suina = {'Pernil': false, 'Linguica':false, 'Costelinha': false}
    static frango = {'Asa': false, 'Peito': false, 'Coxa': false}
    
    static retornarListas(){
        console.log('TESTess', Carnes.bovina)
        // return{
        //     bovina: Carnes.bovina,
        //     suina: Carnes.suina,
        //     frango : Carnes.frango
        // } 

    }
}

