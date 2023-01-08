const express = require("express");
const router = express.Router()
const items = require('../models/items')

router.get('/', async (req, res) => {
    try {
        const itemList = await items.find()
        res.json(itemList)
    } catch (error) {
        res.send('erroe' + error)
    }
})
router.post('/', async (req, res) => {
    const item = new items({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status,
        createdDate: req.body.createdDate,
        endDate: req.body.endDate
    })
    try {
        const a1 = await item.save()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const item = await items.findById(req.params.id)
        item.content = req.body.content
        const a1 = await item.save()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const item = await items.findById(req.params.id)
        const a1 = await item.remove()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router