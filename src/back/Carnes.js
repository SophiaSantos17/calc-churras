export default class Carnes{
    static bovina = {'Picanha': false, 'Maminha': false, 'Costela': false}
    static suina = {'Pernil': false, 'Linguica':false, 'Costelinha': false}
    static frango = {'Asa': false, 'Peito': false, 'Coxa': false}
    
    static retornarListas(){
        return{
            bovina: this.bovina,
            suina : this.suina,
            frango: this.frango
        }
    }

    static toggleCarne(tipo,corte){
        this[`${tipo}`][`${corte}`] = !this[`${tipo}`][`${corte}`]
    }

}

