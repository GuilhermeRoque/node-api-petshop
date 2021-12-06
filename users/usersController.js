const express = require('express');
const router = express.Router();
const model = require('./usersModel')
const bcrypt = require('bcrypt')
const verifyJWT = require('../authentication/jwt')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res, next)=>{
    console.log(req.body)
    user = req.body
    user.hashPassword = await bcrypt.hash(req.body.password, 12)
    console.log(user)
    const userCreated = await model.create(req.body)
    res.status(201)
    res.send(userCreated)
})

router.post('/:id/login', async (req, res, next)=>{
    const id =  req.params.id
    const result =  await model.findOne({
        where: {
            id: id
        }
    })
  
    if (!result){
        res.status(404).send()
        return

    }

    const passwordIsValid = await bcrypt.compare(req.body.password, result.hashPassword)
    
    if (!passwordIsValid){
        res.status(401).send()
        return
    }

    const token = jwt.sign(result.id, process.env.JWT_KEY)
    res.set("Authorization", token)
    res.status(204).send()
})

router.get('/', verifyJWT, async function(req, res, next) {
    const results = await model.findAll()
    res.send(results)
});

router.get('/:id', verifyJWT, async (req, res, next)=>{
    const id =  req.params.id
    const result =  await model.findOne({
        where: {
            id: id
        }
    })
    if (!result){
        next()
    }else{
        console.log(result)
        res.send(result)    
    }

})


router.put('/:id', verifyJWT, async (req, res, next)=>{
    const id =  req.params.id
    const result =  await model.findOne({
        where: {
            id: id
        }
    })
    console.log(result)
    await model.update(
        req.body, 
        {
        where: {id: id}
        }
    )
    res.status(204).end()
})

router.delete('/:id', verifyJWT, async (req, res, next)=>{
    const id =  req.params.id
    const result =  await model.findOne({
        where: {
            id: id
        }
    })
    console.log(result)
    await model.destroy(
        {
        where: {id: id}
        }
    )
    res.status(204).end()
})

module.exports = router;
