const express = require('express');
router = express.Router(),
axios = require('axios').default

APIKey = "95a316ccdb56fb9d8b843dd0c7ce5d15"

    router.get('/:city', async (req, res) => {

        const city = req.params.city || 3432043  

        const URL = `http://api.openweathermap.org/data/2.5/weather?id=${city}&mode=json&units=metric&lang=es&appid=${APIKey}`

        const {data} = await axios.get(URL)
        if(!data) {
            res.status(500).json({message: "algo salio mal"})
        }
        if(data) {
            res.send(data)
        }
    })



module.exports = router
