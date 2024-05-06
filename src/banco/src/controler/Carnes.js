const { openDb } = require('../configDB.js')

function createTableCarnes(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Carnes (id_carne INTEGER PRIMARY KEY, id_evento INTEGER, tipo_carne TEXT, quant_carne INTEGER, FOREIGN KEY(id_evento) REFERENCES Eventos(id_evento))')
    })
}

function insertCarnes(req, res){
    let carne = req.body
    openDb().then(db => {
        db.run('INSERT INTO Carnes (id_evento, tipo_carne, quant_carne) VALUES(?, ?, ?)', [ carne.id_evento, carne.tipo_carne, carne.quant_carne])
        res.status(200).json('Concluido')
    })
}

function selectCarnes(req, res){
    openDb().then(db =>{
        db.all('SELECT * FROM Carnes')
            .then(carnes => res.json(carnes))
    })
}

function updateCarnes(req, res){
    let id = req.params.id
    let carne = req.body
    openDb().then(db => {
        db.get('UPDATE Carnes SET tipo_carne=?, quant_carne=? WHERE id_carne=?', [carne.tipo_carne, carne.quant_carne, id])
        res.status(200).json("mudado")
    })
}

function deleteCarnes(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Carnes WHERE id_carne=?', [id])
        res.status(200).json("deletado");
    });
}

module.exports = {
    createTableCarnes,
    insertCarnes,
    selectCarnes,
    updateCarnes,
    deleteCarnes
}