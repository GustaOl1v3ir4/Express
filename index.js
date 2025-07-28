const express = require('express')
const router = require('./src/routes/user')
const database = require('./src/database')

const app = express()
const porta = 3000
app.use(express.json())

app.use('/api/v1/user', router)


database.db
    .sync({ force: true}) 
    .then((_) => {
        app.listen(porta, () => {
            console.log('servidor rodando na porta ' + porta)
        })
    })

    .catch((e) => {
        console.error(`Não foi possível conectar com o banco: ${e}`)
    })


