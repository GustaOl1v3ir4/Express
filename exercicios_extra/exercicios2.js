const express = require('express')


const app = express()
const porta = 7000
app.use(express.json())

app.post('/somar', (req, res) => {
    const {num1, num2 } = req.body
    res.status(201).send({
        result: num1 + num2 
    })
}) 

app.listen(porta, () => {
    console.log('Servidor rodando na porta: ' + porta)
})