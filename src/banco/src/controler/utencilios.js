const { openDb } = require ("../configDB.js")

function createTableUtencilios(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Utencilios (id_utencilios INTEGER PRIMARY KEY, id_evento INTEGER, nome_utencilio TEXT, quant_utencilio INTEGER, FOREIGN KEY (id_evento) REFERENCES Eventos(id_evento))')
    })
}

function insertUtencilios(req, res){
    let utencilios = req.body
    openDb().then(db => {
        db.run('INSERT INTO Utencilios (id_evento, nome_utencilio, quant_utencilio) VALUES (?, ?, ?)', [utencilios.id_evento, utencilios.nome_utencilio, utencilios.quant_utencilio])
        res.status(200).json('utencilio adicionado')
    })
}

function selectUtencilios(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM Utencilios')
        .then(utencilios => res.status(200).json(utencilios))
    })
}

function updateUtencilios(req, res){
    let id = req.params.id
    let utencilios = req.body
    openDb().then(db => {
        db.run('UPDATE Utencilios SET nome_utencilio=?, quant_utencilio=? WHERE id_utencilios=?', [utencilios.nome_utencilios, utencilios.quant_utencilios, id])
        res.status(200).json('utencilio atualizado')
    })
}

function deleteUtencilios(req, res){
    let id = req.params.id
    openDb().then(db => {
        db.get('DELETE FROM Utencilios WHERE id_utencilios=?', [id])
        res.status(200).json('utencilio deletado')
    })
}

module.exports = {
    createTableUtencilios,
    insertUtencilios,
    selectUtencilios, 
    updateUtencilios,
    deleteUtencilios
}