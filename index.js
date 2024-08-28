require('dotenv').config();

const express=require("express");
const axios = require("axios")
const path = require("path")
const port = 3000;
const app = express();

const API_KEY = process.env.API_KEY
const BASE_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`;

app.get('/weather', async (req, res)=>{
    const city = req.query.city;
    if(!city){
        return res.status(400).send('City Parameter is required.')
    }
    try{
        const response = await axios.get(BASE_URL+city);
        res.send(response.data);
        
    }catch(err){
        res.status(500).send('Error fetching weather data')
    }
})

// http://localhost:3000/weather?city=London
// Use this Url for get exact output

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})