const { openDb } = require("../configDB.js");

function eventoCompleto(req, res){
    let id = req.params.id;
    openDb().then(db => {
        db.all('SELECT e.id_evento, e.quant_horas, e.dono_evento, e.local_evento, e.titulo_evento, p.quant_homem, p.quant_mulher, p.quant_criancas, ca.tipo_carne, ca.quant_carne, co.nome_corte, co.quant, b.nome_bebida, b.quant_bebida, a.arroz, a.farofa, a.pao, a.acomp_adic, u.nome_utencilio, u.quant_utencilio FROM Eventos AS e INNER JOIN Participantes AS p ON e.id_evento = p.id_evento INNER JOIN Carnes AS ca ON e.id_evento = ca.id_evento INNER JOIN Cortes AS co ON e.id_evento = co.id_evento INNER JOIN Bebidas AS b ON e.id_evento = b.id_evento INNER JOIN Acomp AS a ON e.id_evento = a.id_evento INNER JOIN Utencilios AS u ON e.id_evento = u.id_evento WHERE e.id_evento=?', [id])
        .then(eventos => res.status(200).json(eventos))
    })
}

module.exports = {
    eventoCompleto
}