const jwt = require('jsonwebtoken');

async function verifyJWT(req,res,next){
    const authString = req.get('Authorization')
    const bearerType = "Bearer "
    if (authString && authString.startsWith(bearerType) && authString.length > bearerType.length){
        const token = authString.split(' ')[1]
        await jwt.verify(token, process.env.JWT_KEY, (err, payload) =>{
            if (err){
                res.status(500).send()
                return                    
            }
            req.idUser = payload.id
            next()
        })
    }else{
        res.status(401).send()
        return
    }
}

module.exports = verifyJWT