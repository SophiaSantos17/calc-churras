export default class Utensilios{
    static carvao = false;
    static prato = false; 
    static kittalher = false; 
    static copos = false;
    static guardanapo = false; 

    static toggleCarvao() {
        Utensilios.carvao = !Utensilios.carvao 
        console.log(Utensilios.getValores())
    }

    static togglePrato() {
        Utensilios.prato = !Utensilios.prato
        console.log(Utensilios.getValores())
    }

    static toggleKittalher() {
        Utensilios.kittalher = !Utensilios.kittalher
        console.log(Utensilios.getValores())
    }

    static toggleCopos() {
        Utensilios.copos = !Utensilios.copos
        console.log(Utensilios.getValores())
    }

    static toggleGuardanapo() {
        Utensilios.guardanapo = !Utensilios.guardanapo
        console.log(Utensilios.getValores())
    }

    static getValores(){
        return{
            carvao: Utensilios.carvao, 
            prato: Utensilios.prato, 
            kittalher: Utensilios.kittalher, 
            copos: Utensilios.copos, 
            guardanapo: Utensilios.guardanapo,
        };
    }

    // static toggle() {
    //     Utensilios. = !Utensilios. 
    //     console.log(Utensilios.getValores())
    // }
    
}
