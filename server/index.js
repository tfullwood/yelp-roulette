const express = require('express')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()

var app = express()
app.use(cors())
const PORT = process.env.PORT || 3001

app.all('/*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.get('/businesses', async function(req, res) {
    if ((!req.query.lat || !req.query.long) && req.query.location === '') {
        return res.status(422).json({error: "Location or Coordinates are required."})
    }

    try {
        let params = {}

        if (req.query.lat) {
            params = {
                term: req.query.term || 'restaurants',
                latitude: req.query.lat,
                longitude: req.query.long,
                categories: req.query.categories || '',
                radius: req.query.radius || 8000,
                limit: req.query.limit || 15,
                offset: req.query.offset || 0
            }
        } else {
            params = {
                term: req.query.term || 'restaurants',
                location: req.query.location,
                categories: req.query.categories || '',
                radius: req.query.radius || 8000,
                limit: req.query.limit || 15,
                offset: req.query.offset || 0
            }
        }
        
        const businesses = await axios.get('https://api.yelp.com/v3/businesses/search', {
            params, headers: {
                Authorization: `Bearer ${process.env.YELP_TOKEN}`
            }
        })

        return res.status(200).json(businesses.data)
    } catch (e) {
        console.log(req.query);

        console.log(e);
        
        return res.status(500).json({error: "Yelp API request failure. IDK what happened check the logs"})
    }
})

app.get('/business', async function(req, res) {
    try {
        const businesses = await axios.get(`https://api.yelp.com/v3/businesses/${req.query.id}`, {
            headers: {
                Authorization: `Bearer ${process.env.YELP_TOKEN}`
            }
        })

        return res.status(200).json(businesses.data)
    } catch (e) {
        console.log(e);
        
        return res.status(500).json({error: "Yelp API request failure. IDK what happened check the logs"})
    }
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})