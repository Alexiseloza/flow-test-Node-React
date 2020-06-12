const express = require('express');
const router = express.Router()


router.use('/location', require('./location'))
    .use('/current', require('./current'))
    .use('/forecast', require('./forecast'))



module.exports = router
