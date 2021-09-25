const express = require('express');
const app = express();
const bodyParser = require('body-parser')

require('dotenv').config();


const port =  process.env.PORT || 4000 ;


//static files
app.use(express.static('public'))
app.use('/css' , express.static(__dirname + 'public/css'))
app.use('/images' , express.static(__dirname + 'public/images'))
app.use('/js' , express.static(__dirname + 'public/js'))

//templating engine
app.set('views' , './src/views')
app.set('view engine' , 'ejs')

app.use(bodyParser.urlencoded({extended : true}));

//setting routes
//home route
const newsRouter = require('./src/routes/news')
app.use('/' , newsRouter)
//technology 
const technoRouter = require('./src/routes/technology')
app.use('/techno' , technoRouter)
//science
const scienceRouter = require('./src/routes/science')
app.use('/science' , scienceRouter)
//business
const businessRouter = require('./src/routes/business')
app.use('/business' , businessRouter)
//health
const healthRouter = require('./src/routes/health')
app.use('/health' , healthRouter)
// /sports
const sportsRouter = require('./src/routes/sports')
app.use('/sports' , sportsRouter)
// /entertainment
const entertainmentRouter = require('./src/routes/entertainment')
app.use('/entertainment' , entertainmentRouter)


//listen on port 3000
app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})