export default class Bebidas{
    static refrigerante = false; 
    static suco = false;
    static cerveja = false;
    static agua = false; 

    static toggleRefrigerante() {
        Bebidas.refrigerante = !Bebidas.refrigerante
        console.log(Bebidas.getValores())
    }

    static toggleSuco() {
        Bebidas.suco = !Bebidas.suco 
        console.log(Bebidas.getValores())
    }

    static toggleCerveja() {
        Bebidas.cerveja = !Bebidas.cerveja
        console.log(Bebidas.getValores())
    }

    static toggleAgua() {
        Bebidas.agua = !Bebidas.agua 
        console.log(Bebidas.getValores())
    }

    static getValores() {
        return {
            refrigerante : Bebidas.refrigerante,
            suco : Bebidas.suco, 
            cerveja: Bebidas.cerveja, 
            agua: Bebidas.agua,

        };
    }
    // static bebidas = {'Refrigerante': false, '
    // Suco': false, 'Cerveja': false, 
    // 'Agua': false}
}
