const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Obtendo um produto'
    });
});

// Insere um produto
router.post('/', (req, res, next) => {
    const produto = { //criando um objeto de produto
        nome_produto: req.body.nome,
        preco_produto: req.body.preco
    };
    res.status(201).send({
        mensagem: 'Usando o POST na rota de produtos',
        produtoCriado: produto
    });
});

// Retorno os dados de um produto específico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Parabéns achou o id especial: ' + id,
        });
    } else {
        res.status(200).send({
            mensagem: 'ID informado não é especial',
        });

    }
});

// Altera dados de um produto específico
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o PATCH na rota de produtos'
    });
});

// Deleta um produto específico
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o DELETE na rota de produtos'
    });
});


module.exports = router;