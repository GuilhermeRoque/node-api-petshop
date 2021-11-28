const express = require('express');
const router = express.Router();
const model = require('./scheduleModel')

router.get('/', async function(req, res, next) {
    const results = await model.findAll()
    console.log(results)
    res.send(results)
});

router.get('/:id', async (req, res, next)=>{
    const id =  req.params.id
    const result =  await model.findOne({
        where: {
            id: id
        }
    })
    console.log(result)
    res.send(result)

})

router.put('/:id', async (req, res, next)=>{
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
    res.status(204)
    res.end()

})


router.post('/', async (req, res, next)=>{
    console.log(req.body)
    const schedule = await model.create(req.body)
    res.status(201)
    console.log(schedule)
    res.send(schedule)
})

router.delete('/:id', async (req, res, next)=>{
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
    res.status(204)
    res.end()
})

module.exports = router;
