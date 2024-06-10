import Carnes from "./Carnes"
import Carnes0 from "./Carnes0"
import Convidados from "./Convidados"

export default class Calculadora{

    static calcularCarnes(){

        let totalGramas = 200 
        let gramasPorTipo = 0
        let numeroCarnes = 0
            
        let gramasSuina = 0
        let gramasBovina = 0
        let gramasFrango = 0
    
        let numCarnesSuina = 0
        let numCarnesBovina = 0
        let numCarnesFrango = 0
    
        let listaBovina = false
        let listaSuina = false
        let listaFrango = false

        
        let listaCarnesBovina = ['Picanha','Maminha','Costela']
        let listaCarnesSuina = ['Pernil','Linguiça','Costelinha']
        let listaCarnesFrango = ['Asa','Peito','Coxa']

        let bovina = Carnes0.bovina
        let suina = Carnes0.suina
        let frango = Carnes0.frango

        // define o número de listas ativas
        if(bovina == true){
            listaBovina = true
            numeroCarnes += 1
        }
        if(suina == true){
            listaSuina = true
            numeroCarnes += 1
        }
        if(frango == true){
            listaFrango = true
            numeroCarnes += 1
        }



        // Pega a lista de carnes selecionadas
        let listaCarnesAtivas = this.listarAtivos()
        
        // ((Convidados.getValores()) * 
        gramasPorTipo = (totalGramas / numeroCarnes).toFixed(3)
        console.log(Convidados.getValores().criancas)
        console.log("gramas por tipo", gramasPorTipo)
        console.log("num de carnes", numeroCarnes)
        

        // // map na lista para definir o número de carnes por tipo

        listaCarnesAtivas.map((carne) =>{

            if(listaCarnesBovina.includes(carne)){
                numCarnesBovina += 1
            }
            if(listaCarnesSuina.includes(carne)){
                numCarnesSuina += 1
            }
            if(listaCarnesFrango.includes(carne)){
                numCarnesFrango += 1
            }

        })

        // console.log(numCarnesBovina, numCarnesFrango,numCarnesSuina)

        // // Divide o total de gramas pelo número de carnes
        this.gramasPorCarne = this.totalGramas / this.numeroCarnes

    
}

      
  static listarAtivos() {
    let ativos = [];
    
    let bovina = Carnes.retornarListas().bovina
    let suina = Carnes.retornarListas().suina
    let frango = Carnes.retornarListas().frango

    // Verifica bovina
    for (let carne in bovina) {
        if (bovina[carne]) {
            ativos.push(carne);
        }
    }

    // Verifica suina
    for (let carne in suina) {
        if (suina[carne]) {
            ativos.push(carne);
        }
    }

    // Verifica frango
    for (let carne in frango) {
        if (frango[carne]) {
            ativos.push(carne);
        }
    }
    console.log(ativos)

    return ativos;
}


}

// export default class Calculadora {

//     static calcularCarnes() {

//         let totalGramas = 0;
//         let gramasPorTipo = 0;
//         let numeroCarnes = 0;

//         let gramasSuina = 0;
//         let gramasBovina = 0;
//         let gramasFrango = 0;

//         let numCarnesSuina = 0;
//         let numCarnesBovina = 0;
//         let numCarnesFrango = 0;

//         // let listaBovina = false;
//         // let listaSuina = false;
//         // let listaFrango = false;

//         const listaBovina = ['Picanha', 'Maminha', 'Costela'];
//         // const listaCarnesBovina = ['Picanha', 'Maminha', 'Costela'];
//         const listaSuina = ['Pernil', 'Linguiça', 'Costelinha'];
//         // const listaCarnesSuina = ['Pernil', 'Linguiça', 'Costelinha'];
//         const listaFrango = ['Asa', 'Peito', 'Coxa'];
//         // const listaCarnesFrango = ['Asa', 'Peito', 'Coxa'];

//         const bovina = Carnes0.bovina;
//         const suina = Carnes0.suina;
//         const frango = Carnes0.frango;

//         // define o número de listas ativas
//         if (bovina) {
//             listaBovina = true;
//             numeroCarnes += 1;
//         }
//         if (suina) {
//             listaSuina = true;
//             numeroCarnes += 1;
//         }
//         if (frango) {
//             listaFrango = true;
//             numeroCarnes += 1;
//         }

//         // Pega a lista de carnes selecionadas
//         const listaCarnesAtivas = this.listarAtivos(bovina, suina, frango);

//         gramasPorTipo = (totalGramas / numeroCarnes).toFixed(3);

//         // map na lista para definir o número de carnes por tipo
//         listaCarnesAtivas.map((carne) => {

//             if (listaCarnesBovina.includes(carne)) {
//                 numCarnesBovina += 1;
//             }
//             if (listaCarnesSuina.includes(carne)) {
//                 numCarnesSuina += 1;
//             }
//             if (listaCarnesFrango.includes(carne)) {
//                 numCarnesFrango += 1;
//             }

//         });

//         console.log(numCarnesBovina, numCarnesFrango, numCarnesSuina);
//     }

//     static listarAtivos(bovina, suina, frango) {
//         let ativos = [];

//         const bovinaList = Carnes.retornarListas().bovina;
//         const suinaList = Carnes.retornarListas().suina;
//         const frangoList = Carnes.retornarListas().frango;

//         // Verifica bovina
//         for (const carne in bovinaList) {
//             if (bovinaList[carne] && bovina) {
//                 ativos.push(carne);
//             }
//         }

//         // Verifica suina
//         for (const carne in suinaList) {
//             if (suinaList[carne] && suina) {
//                 ativos.push(carne);
//             }
//         }

//         // Verifica frango
//         for (const carne in frangoList) {
//             if (frangoList[carne] && frango) {
//                 ativos.push(carne);
//             }
//         }

//         return ativos;
//     }
// }


