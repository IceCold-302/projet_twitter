const router = require('express').Router();
const Mvps = require('../../database/models/mvp.model')

router.post('/mvps', (req,res)=>{
    res.end('hallo')
})

module.exports = router