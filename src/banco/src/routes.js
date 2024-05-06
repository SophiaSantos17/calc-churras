const { Router } = require("express");
const { createTableEventos, selectEvento, selectEventos, insertEvento, updateEvento, deleteEvento } = require("./controler/Eventos.js");
const { createTableParticiantes, insertParticipantes, selectParticipantes, updateParticipantes, deleteParticipantes} = require("./controler/Participantes.js");
const { createTableCarnes, insertCarnes, selectCarnes, updateCarnes, deleteCarnes } = require("./controler/Carnes.js");
const { createTableCortes, insertCortes, selectCortes, updateCortes, deleteCortes } = require("./controler/Corte.js")
const { createTableBebidas, insertBebidas, selectBebidas, updateBebibas, deleteBebidas } = require("./controler/Bebibas.js"); 
const { createTableAcomp, insertAcomp, selectAcomp, updateAcomp, deleteAcomp } = require("./controler/Acomp.js");
const { createTableUtencilios, insertUtencilios, selectUtencilios, updateUtencilios, deleteUtencilios} = require("./controler/utencilios.js")
const { eventoCompleto } = require("./controler/Competo.js")

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "msg": "api rodando",

    })
})
// rota da tabela de evento 
createTableEventos()
router.get('/evento/:id', selectEvento)
router.get('/eventos', selectEventos)
router.post('/evento', insertEvento)
router.put('/evento/:id', updateEvento)
router.delete('/evento/:id',deleteEvento)

// rota da tabela de participantes
createTableParticiantes()
router.post('/participantes', insertParticipantes)
router.get('/participantes', selectParticipantes)
router.put('/participantes/:id', updateParticipantes)
router.delete('/participantes/:id', deleteParticipantes)

// rota da tabela carnes
createTableCarnes()
router.post('/carnes', insertCarnes)
router.get('/carnes', selectCarnes)
router.put('/carnes/:id', updateCarnes)
router.delete('/carnes/:id', deleteCarnes)

// rotas da tabela de cortes
createTableCortes()
router.post('/cortes', insertCortes)
router.get('/cortes', selectCortes)
router.put('/cortes/:id', updateCortes)
router.delete('/cortes/:id', deleteCortes)

// rotas da tabela de bebidas
createTableBebidas()
router.post('/bebidas', insertBebidas)
router.get('/bebidas', selectBebidas)
router.put('/bebidas/:id', updateBebibas)
router.delete('/bebidas/:id', deleteBebidas)

// rotas da tabela de acompanhamento
createTableAcomp()
router.post('/acomp', insertAcomp)
router.get('/acomp', selectAcomp)
router.put('/acomp/:id', updateAcomp)
router.delete('/acomp/:id', deleteAcomp)

// rotas da tabela utencilios
createTableUtencilios()
router.post('/utencilios', insertUtencilios)
router.get('/utencilios', selectUtencilios)
router.put('/utencilios/:id', updateUtencilios)
router.delete('/utencilios/:id', deleteUtencilios)


// traz tudo 
router.get('/completo/:id', eventoCompleto)

module.exports = router;