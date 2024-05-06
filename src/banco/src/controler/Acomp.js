const { openDb } = require("../configDB.js");

function createTableAcomp (){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Acomp (id_acomp INTEGER PRIMARY KEY, id_evento INTEGER, arroz INTEGER, farofa INTEGER, pao INTEGER, acomp_adic INTEGER, FOREIGN KEY (id_evento) REFERENCES Eventos(id_evento))')
    })
}

function insertAcomp (req, res){
    let acomp = req.body
    openDb().then(db => {
        db.run(' INSERT INTO Acomp (id_evento, arroz, farofa, pao, acomp_adic) VALUES(?,?,?,?,?)', [acomp.id_evento, acomp.arroz, acomp.farofa, acomp.pao, acomp.acomp_adic])
        res.status(200).json('Acompanhamento inserido')
    })
}

function selectAcomp(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM Acomp')
        .then(acomp => res.status(200).json(acomp))
    })
}

function updateAcomp (req, res){
    let id = req.params.id
    let acomp = req.body
    openDb().then(db => {
        db.get('UPDATE Acomp SET arroz=?, farofa=?, pao=?, acomp_adic=?  WHERE id_acomp=?', [acomp.id_evento, acomp.arroz, acomp.farofa, acomp.pao, acomp.acomp_adic, id])
        res.status(200).json('Acompanhamento atualizado')
    })
}

function deleteAcomp (req, res){
    let id = req.params.id
    openDb().then(db => {
        db.get('DELETE FROM Acomp WHERE id_acomp= ?', [id])
        res.status(200).json('Acompanhamento deletado')
    })
}

module.exports = {
    createTableAcomp,
    insertAcomp,
    selectAcomp,
    updateAcomp,
    deleteAcomp
}