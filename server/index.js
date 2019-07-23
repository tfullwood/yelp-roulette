const express = require('express')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()

var app = express()
app.use(cors())

app.all('/*', function(req, res, next) {
    //Will likely need to set some headers
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.get('/businesses', async function(req, res) {
    if (!req.query.lat || !req.query.long) {
        return res.status(422).json({error: "Latitude and Longitude are required parameters"})
    }

    try {
        const businesses = await axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
                term: req.query.term || 'restaurants',
                latitude: req.query.lat,
                longitude: req.query.long,
                categories: req.query.categories || '',
                radius: req.query.radius || 8000
            }, headers: {
                Authorization: `Bearer ${process.env.YELP_TOKEN}`
            }
        })

        return res.status(200).json(businesses.data)
    } catch (e) {
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

app.listen(3001)