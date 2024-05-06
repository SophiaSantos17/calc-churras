const { openDb } = require('../configDB.js');

function createTableEventos() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Eventos ( id_evento INTEGER PRIMARY KEY, quant_horas INTEGER, dono_evento TEXT, local_evento TEXT, titulo_evento TEXT, UNIQUE(id_evento) )');
    });
}

function insertEvento(req, res) {
    let evento = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Eventos (quant_horas, dono_evento, local_evento, titulo_evento) VALUES (?, ?, ?, ?)', [evento.quant_horas, evento.dono_evento, evento.local_evento, evento.titulo_evento]);
        res.status(200).json("Evento salvo com sucesso");
    });
}

function selectEvento(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM Eventos WHERE id_evento=?', [id])
            .then(evento => res.json(evento));
    });
}

function selectEventos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Eventos')
            .then(eventos => res.json(eventos));
    });
}


function updateEvento(req, res) {
    let id = req.params.id;
    let evento = req.body
    openDb().then(db => {
        db.get('UPDATE Eventos SET quant_horas=?, dono_evento=?, local_evento=?, titulo_evento=? WHERE id_evento=?', [evento.quant_horas, evento.dono_evento, evento.local_evento, evento.titulo_evento, id])
        res.status(200).json("Evento atualizado");
    });
}

function deleteEvento(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Eventos WHERE id_evento=?', [id])
        res.status(200).json("Evento deletado");
    });
}


module.exports = { 
    createTableEventos, 
    selectEvento, 
    selectEventos, 
    insertEvento,
    updateEvento,
    deleteEvento 
};
