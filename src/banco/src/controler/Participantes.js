const { openDb } = require('../configDB.js');

function createTableParticiantes() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Participantes ( id_participantes INTEGER PRIMARY KEY, id_evento INTEGER, quant_homem INTEGER, quant_mulher INTEGER, quant_criancas INTEGER, FOREIGN KEY (id_evento) REFERENCES Eventos(id_evento) )')
    });
}


function insertParticipantes(req, res){
    let pessoas = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Participantes ( id_evento, quant_homem, quant_mulher, quant_criancas ) VALUES (?, ?, ?, ?)', [pessoas.id_evento, pessoas.quant_homem, pessoas.quant_mulher, pessoas.quant_criancas ])
        res.status(200).json("Participantes adicionados")
    });
}

function selectParticipantes(req, res){
    openDb().then(db =>{
        db.all('SELECT * FROM Participantes')
        .then(participantes => res.json(participantes))
    })
}

function updateParticipantes(req, res){
    let id = req.params.id;
    let pessoas = req.body;
    openDb().then(db => {
        db.get('UPDATE participantes SET quant_homem=?, quant_mulher=?, quant_criancas=? WHERE id_participantes=?', [pessoas.quant_homem, pessoas.quant_mulher, pessoas.quant_criancas, id ])
        res.status(200).json("Participantes atualizados")
    })
}

function deleteParticipantes(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Participantes WHERE id_Participantes=?', [id])
        res.status(200).json("deletado");
    });
}

module.exports = {
    createTableParticiantes,
    insertParticipantes,
    selectParticipantes,
    updateParticipantes,
    deleteParticipantes
}