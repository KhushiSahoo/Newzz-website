const express = require('express');
const scienceRouter = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.API_KEY;

scienceRouter.get('' , async(req , res)=>{
    //res.render('news')
    try{
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${api_key}`)
        res.render('science' , { data : newsApi.data.articles })
        //console.log(newsApi.data.articles)

    }catch(error){
        if(error.response){
            res.render('science' , { data : null })
            console.log(error.response.data)
            console.log(err.response.status)
        }else if(error.request){
            res.render('science' , { data : null })
            console.log(error.request)
        }else{
            res.render('science' , { data : null })
            console.error('Error' , error.message)
        }

    }
})

module.exports=scienceRouter