import axios from 'axios'

const yelp = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`
})

export const getBusinesses = async (params) => {
    return await yelp.get('/businesses', {
        params: {
            term: params.term || 'restaurant',
            lat: params.lat || '',
            long: params.long || '',
            location: params.location || '',
            categories: params.categories || '',
            radius: params.radius || 8000, //set to meters, 8000 is roughly 5 miles
            limit: params.limit || 15,
            offset: params.offset || 0
        }
    })
}

export const getBusiness = async (id) => {
    return await yelp.get('/business', {
        params: { id }
    })
}