const { openDb } = require('../configDB.js');

function createTableCortes(){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Cortes (id_corte INTEGER PRIMARY KEY, id_evento INTEGER, nome_corte TEXT, quant INTEGER, FOREIGN KEY(id_evento) REFERENCES Eventos(id_eventos))')
    })
}

function insertCortes(req, res){
    let corte = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Cortes (id_evento, nome_corte, quant) VALUES(?, ?, ?)', [corte.id_evento, corte.nome_corte, corte.quant])
        res.status(200).json("salvo")
    })
}

function selectCortes(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM Cortes')
        .then(cortes => res.status(200).json(cortes))
    })
}

function updateCortes(req, res){
    let corte = req.body
    let id = req.params.id
    openDb().then(db => {
        db.get('UPDATE Cortes SET nome_corte=?, quant=? WHERE id_corte=?', [corte.nome_corte, corte.quant,id])
        res.status(200).json("Atualizado")
    })
}

function deleteCortes(req, res){
    let id = req.params.id
    openDb().then(db => {
        db.get('DELETE FROM Cortes WHERE id_corte=?', [id])
        res.status(200).json("Deletado")
    })
}

module.exports = {
    createTableCortes,
    insertCortes,
    selectCortes,
    updateCortes,
    deleteCortes
}