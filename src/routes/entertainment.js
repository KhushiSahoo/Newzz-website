const express = require('express');
const entertainmentRouter = express.Router();
const axios = require('axios');
require('dotenv').config();
const api = process.env.API_KEY;


entertainmentRouter.get('' , async(req , res)=>{
    //res.render('news')
    try{
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api}`)
        res.render('entertainment' , { data : newsApi.data.articles })
        //console.log(newsApi.data.articles)

    }catch(error){
        if(error.response){
            res.render('entertainment' , { data : null })
            console.log(error.response.data)
            console.log(err.response.status)
        }else if(error.request){
            res.render('entertainment' , { data : null })
            console.log(error.request)
        }else{
            res.render('entertainment' , { data : null })
            console.error('Error' , error.message)
        }

    }
})

module.exports=entertainmentRouter