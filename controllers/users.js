////////////////
/// DEPENDENCIES
////////////////
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const jwt = require('jsonwebtoken') // Token for later

////////////////
/// ROUTES
////////////////

////Create Route////
router.post('/', async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json(createdUser)
    } catch(error) {
        res.status(400).json(error)
    }
})

////Read Route////
router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch(error){
        res.status(400).json(error)
    }
})

////Delete Route////
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedUser)
    } catch(error) {
        res.status(400).json(error)
    }
})

////Update Route////
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.status(200).json(updatedUser)
    } catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router