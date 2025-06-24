const express = require('express')

const app = express()
const porta = 9000

app.get('/somar', (req, res) => {
    const {num1, num2 } = req.query
    res.send('A soma é: ' + (Number(num1) + Number(num2)))
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta)
})