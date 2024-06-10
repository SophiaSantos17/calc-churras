// import Carnes from "./Carnes"
// import Carnes0 from "./Carnes0"
// import Convidados from "./Convidados"

// export default class Calculadora{

//     static calcularCarnes(){

//         let totalGramas = 200 
//         let gramasPorTipo = 0
//         let numeroCarnes = 0
            
//         let gramasSuina = 0
//         let gramasBovina = 0
//         let gramasFrango = 0
    
//         let numCarnesSuina = 0
//         let numCarnesBovina = 0
//         let numCarnesFrango = 0
    
//         let listaBovina = false
//         let listaSuina = false
//         let listaFrango = false

        
//         let listaCarnesBovina = ['Picanha','Maminha','Costela']
//         let listaCarnesSuina = ['Pernil','Linguiça','Costelinha']
//         let listaCarnesFrango = ['Asa','Peito','Coxa']

//         let bovina = Carnes0.bovina
//         let suina = Carnes0.suina
//         let frango = Carnes0.frango

//         // define o número de listas ativas
//         if(bovina == true){
//             listaBovina = true
//             numeroCarnes += 1
//         }
//         if(suina == true){
//             listaSuina = true
//             numeroCarnes += 1
//         }
//         if(frango == true){
//             listaFrango = true
//             numeroCarnes += 1
//         }

//         // Pega a lista de carnes selecionadas
//         let listaCarnesAtivas = this.listarAtivos()
        
        
//         gramasPorTipo = (totalGramas / numeroCarnes).toFixed(2)
//         console.log(Convidados.getValores().criancas)
//         return gramasPorTipo
//         // const resultados = Calculadora.calcularCarnes(); 
//         console.log("gramas por tipo", gramasPorTipo)
//         console.log("num de carnes", numeroCarnes)


//         listaCarnesAtivas.map((carne) =>{

//             if(listaCarnesBovina.includes(carne)){
//                 numCarnesBovina += 1
//             }
//             if(listaCarnesSuina.includes(carne)){
//                 numCarnesSuina += 1
//             }
//             if(listaCarnesFrango.includes(carne)){
//                 numCarnesFrango += 1
//             }

//         })

//         // console.log(numCarnesBovina, numCarnesFrango,numCarnesSuina)

//         this.gramasPorCarne = this.totalGramas / this.numeroCarnes
   
// }
      
//   static listarAtivos() {
//     let ativos = [];
    
//     let bovina = Carnes.retornarListas().bovina
//     let suina = Carnes.retornarListas().suina
//     let frango = Carnes.retornarListas().frango

//     // Verifica bovina
//     for (let carne in bovina) {
//         if (bovina[carne]) {
//             ativos.push(carne);
//         }
//     }

//     // Verifica suina
//     for (let carne in suina) {
//         if (suina[carne]) {
//             ativos.push(carne);
//         }
//     }

//     // Verifica frango
//     for (let carne in frango) {
//         if (frango[carne]) {
//             ativos.push(carne);
//         }
//     }
//     console.log(ativos)

//     return ativos;
// }

// }
import Carnes from "./Carnes";
import Carnes0 from "./Carnes0";
import Convidados from "./Convidados";

export default class Calculadora {

    static calcularCarnes() {
        const totalGramasPorPessoa = 200; // Quantidade de carne por pessoa
        let numeroCarnes = 0;

        let gramasSuina = 0;
        let gramasBovina = 0;
        let gramasFrango = 0;

        const listaCarnesBovina = ['Picanha', 'Maminha', 'Costela'];
        const listaCarnesSuina = ['Pernil', 'Linguiça', 'Costelinha'];
        const listaCarnesFrango = ['Asa', 'Peito', 'Coxa'];

        const bovina = Carnes0.bovina;
        const suina = Carnes0.suina;
        const frango = Carnes0.frango;

        // Define o número de listas ativas
        if (bovina) {
            numeroCarnes += 1;
        }
        if (suina) {
            numeroCarnes += 1;
        }
        if (frango) {
            numeroCarnes += 1;
        }

        // Pega a lista de carnes selecionadas
        const listaCarnesAtivas = this.listarAtivos();

        // Obtém o número de convidados
        const totalConvidados = Convidados.getValores().participantes; // Supondo que getValores retorna um objeto com total de participantes

        // Calcula as gramas por tipo de carne com base no número de convidados e tipos de carne ativos
        const gramasPorTipo = (numeroCarnes > 0) ? ((totalGramasPorPessoa * totalConvidados) / numeroCarnes).toFixed(2) : 0;

        // Contabiliza o número de carnes por tipo na lista de carnes ativas
        let numCarnesBovina = 0;
        let numCarnesSuina = 0;
        let numCarnesFrango = 0;

        listaCarnesAtivas.forEach((carne) => {
            if (listaCarnesBovina.includes(carne)) {
                numCarnesBovina += 1;
            }
            if (listaCarnesSuina.includes(carne)) {
                numCarnesSuina += 1;
            }
            if (listaCarnesFrango.includes(carne)) {
                numCarnesFrango += 1;
            }
        });

        // Divide o total de gramas por carne com base no número de carnes ativas
        if (bovina && numCarnesBovina > 0) {
            gramasBovina = (gramasPorTipo / numCarnesBovina).toFixed(2);
        }
        if (suina && numCarnesSuina > 0) {
            gramasSuina = (gramasPorTipo / numCarnesSuina).toFixed(2);
        }
        if (frango && numCarnesFrango > 0) {
            gramasFrango = (gramasPorTipo / numCarnesFrango).toFixed(2);
        }

        // Retorna as quantidades calculadas
        return {
            gramasBovina: parseFloat(gramasBovina),
            gramasSuina: parseFloat(gramasSuina),
            gramasFrango: parseFloat(gramasFrango)
        };
    }

    static listarAtivos() {
        let ativos = [];

        const bovina = Carnes.retornarListas().bovina;
        const suina = Carnes.retornarListas().suina;
        const frango = Carnes.retornarListas().frango;

        // Verifica bovina
        for (const carne in bovina) {
            if (bovina[carne]) {
                ativos.push(carne);
            }
        }

        // Verifica suina
        for (const carne in suina) {
            if (suina[carne]) {
                ativos.push(carne);
            }
        }

        // Verifica frango
        for (const carne in frango) {
            if (frango[carne]) {
                ativos.push(carne);
            }
        }

        console.log("Carnes ativas:", ativos);
        return ativos;
    }
}
