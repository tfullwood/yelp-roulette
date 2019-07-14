const express = require('express')
const axios = require('axios')

require('dotenv').config()

var app = express()

app.all('/*', function(req, res, next) {
    //Will likely need to set some headers
    next()
})

app.get('/businesses', async function(req, res) {
    if (!req.query.lat || !req.query.long) {
        return res.status(422).json({error: "Latitude and Longitude are required parameters"})
    }
    
    var params = {
        term: req.query.term || 'restaurant',
        lat: req.query.lat,
        long: req.query.long,
        radius: req.query.radius
    }

    try {
        const businesses = await axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
                term: params.term || 'restaurants',
                latitude: params.lat,
                longitude: params.long,
                radius: params.radius || 8000
            }, headers: {
                Authorization: `Bearer ${process.env.YELP_TOKEN}`
            }
        })

        return res.status(200).json(businesses.data)
    } catch (e) {
        console.log(e);
        
        return res.status(422).json({error: "Yelp API request failure. IDK what happened check the logs"})
    }
})

app.listen(3001)