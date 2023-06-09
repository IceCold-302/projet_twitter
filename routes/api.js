const router = require('express').Router();
const mvps = require('./resources/mvps')

router.use('/mvps', mvps)

module.exports = router;
