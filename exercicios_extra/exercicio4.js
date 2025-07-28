const express = require('express')

const app = express()
const porta = 2000

function somar(num1,num2){
    return num1 + num2
}
function sub(num1,num2){
    return num1 + num2
}
function multi(num1,num2){
    return num1 + num2
}
function div(num1,num2){
    return num1+num2
}

app.post('/somar', (req,res) =>{
    const {num1, num2} = req.body
    const result = somar(num1,num2)

    res.status(200).send({result})
})
app.post('/sub', (req,res) => {
    const {num1, num2} = req.body
    const result = sub(num1,num2)

    res.status(200).send({result})
}) 
app.post('/mult', (req,res) => {
    const {num1, num2} = req.body
    const result = multi(num1, num2)

    res.status(200).send({result})
})
app.post('/div', (req,res) => {
    const {num1, num2} = req.body
    const result = div(num1,num2)
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta)
})