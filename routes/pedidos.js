const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Dados de todos os pedidos'
    });
});

// Insere um pedido
router.post('/', (req, res, next) => {
    const pedido = { //objeto de pedido
        id_pedido: req.body.id_pedido,
        quantidade_pedido: req.body.quantidade
    };
    res.status(201).send({
        mensagem: 'Pedido inserido',
        pedidoCriado: pedido
    });
});

// Retorno os dados de um produto específico
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do pedido com id: ' + id,
        id: id
    });
});

// Altera dados de um pedido específico
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Alterado detalhes de um pedido'
    });
});

// Deleta um pedido específico
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Excluído o pedido'
    });
});

module.exports = router;