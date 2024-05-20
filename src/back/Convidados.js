export default class Convidados{
    static homens = 0
    static mulheres = 0 
    static criancas = 0 
    static qntsbebem = 0
    static participantes = 0

    static definirNumHomens(num) {
        Convidados.homens = num;
    }

    static definirNumMulheres(num) {
        Convidados.mulheres = num;
    }

    static definirNumCriancas (num) {
        Convidados.criancas = num;
    }

    static definirNumQntsbebem(num) {
        Convidados.qntsbebem = num;
    }

    static getValores() {
        return {
            homens: Convidados.homens,
            mulheres: Convidados.mulheres,
            criancas: Convidados.criancas,
            qntsbebem: Convidados.qntsbebem,
            participantes: Convidados.homens + Convidados.mulheres + Convidados.criancas
        };
    }
}
