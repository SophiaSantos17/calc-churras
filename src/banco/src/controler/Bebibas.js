const { openDb } = require("../configDB.js");

function createTableBebidas (){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Bebidas (id_bebida INTEGER PRIMARY KEY, id_evento INTEGER, nome_bebida TEXT, quant_bebida INTEGER, FOREIGN KEY(id_evento) REFERENCES Eventos(id_evento))')
    })
}

function insertBebidas (req, res){
    let bebidas = req.body
    openDb().then(db => {
        db.run('INSERT INTO Bebidas (id_evento, nome_bebida, quant_bebida) VALUES(?, ?, ?)', [bebidas.id_evento, bebidas.nome_bebida, bebidas.quant_bebida])
        res.status(200).json('Bebidas inseridas')
    })
}

function selectBebidas(req, res) {
    openDb().then(db =>{
        db.all('SELECT * FROM Bebidas')
        .then(bebidas => res.json(bebidas))
    })
}

function updateBebibas (req, res){
    let id = req.params.id
    let bebidas = req.body
    openDb().then(db => {
        db.get('UPDATE Bebidas SET nome_bebida=?, quant_bebida=? WHERE id_bebida=?', [bebidas.nome_bebida, bebidas.quant_bebida, id])
        res.status(200).json("Bebida atualizada")
    })
}

function deleteBebidas(req, res) {
    let id = req.params.id
    openDb().then(db => {
        db.get('DELETE FROM Bebidas WHERE id_bebida=?', [id])
        res.status(200).json("Bebidas deletada")
    })
}

module.exports = { 
    createTableBebidas,
    insertBebidas,
    selectBebidas,
    updateBebibas,
    deleteBebidas
}