const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.API_KEY;


newsRouter.get('' , async(req , res)=>{
    //res.render('news')
    try{
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`)
        res.render('news' , { data : newsApi.data.articles })
        console.log(newsApi.data.articles)

    }catch(error){
        if(error.response){
            res.render('news' , { data : null })
            console.log(error.response.data)
            console.log(err.response.status)
        }else if(error.request){
            res.render('news' , { data : null })
            console.log(error.request)
        }else{
            res.render('news' , { data : null })
            console.error('Error' , error.message)
        }

    }
})
newsRouter.post('' , async(req , res)=>{
    let search = req.body.search
    try{
        const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=5c99070f089842c8b9a24883e7c76c3c`)
        res.render('search' , { data : newsApi.data.articles })
        console.log(newsApi.data.articles)

    }catch(error){
        if(error.response){
            console.log(error.response.data)
            console.log(err.response.status)
        }else if(error.request){
            console.log(error.request)
        }else{
            console.error('Error' , error.message)
        }

    }

})
//https://newsapi.org/v2/everything?q=Apple&from=2021-09-19&sortBy=popularity&apiKey=API_KEY

module.exports=newsRouter