const express = require('express');
const businessRouter = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.API_KEY;


businessRouter.get('' , async(req , res)=>{
    //res.render('news')
    try{
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${api_key}`)
        res.render('business' , { data : newsApi.data.articles })
        //console.log(newsApi.data.articles)

    }catch(error){
        if(error.response){
            res.render('business' , { data : null })
            console.log(error.response.data)
            console.log(err.response.status)
        }else if(error.request){
            res.render('business' , { data : null })
            console.log(error.request)
        }else{
            res.render('business' , { data : null })
            console.error('Error' , error.message)
        }

    }
})

module.exports=businessRouter