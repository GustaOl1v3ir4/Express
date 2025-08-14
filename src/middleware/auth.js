const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) { //req -> requisição / res -> resposta da requisição / next -> seguir para o proximo passo
    const token = req.headers["authorization"]
    
    if(!token) {
        res.status(400).json({msg: "Token inválido ou não fornecido"})
        return
    }

    jwt.verify(token, "M!nh4S3nh4Secreta", (err, decoded) => {
        if(err) {
            console.log(err)
            res.status(400).json({ msg: "Token inválido ou não fornecido." })
            return
        }

        req.session = decoded
        next()
    })

}

module.exports = authMiddleware