const express = require('express')
const router = express.Router()

const Manager = require('../manager.js')
const manager = new Manager()

router.get('/', (req, res) => {
    let result = manager.findAll()
    res.send(result)
})

router.get('/:id', (req, res) => {
    let result = manager.findById(req.params.id)
    if(!result) return res.send({error: 'product not found'})
    res.send(result)
})

router.post('/', (req, res) => {
    let result = manager.create(req.body)
    req.send(result)    
})

router.put('/:id', (req, res) => {
    let result = manager.update(req.params.id, req.body)
    if (!result) return res.send({error: 'product not found'})
    res.send(result)
})

router.delete('/:id', (req, res) => {
    let result = manager.delete(req.params.id)
    res.send(result)
})

module.exports = router