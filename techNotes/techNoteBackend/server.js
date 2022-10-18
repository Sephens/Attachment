require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
//import the logger we created
const { logger } = require('./middleware/logger')

//import the errorHandler
const errorHandler = require('./middleware/errorHandler')

//import the cookie parser
const cookieParser = require('cookie-parser')

//import cors(cross origin resource sharing)
const cors = require('cors')

const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 4001 // which port the server runs on

console.log(process.env.NODE_ENV)

//lets user our logger file in our app
app.use(logger)

//use cors
app.use(cors(corsOptions))
//an express middleware to process json
app.use(express.json())

//use the cookie parser
app.use(cookieParser)

 //express.static is a middleware that tells the server where to grab static files.
 //path.join is used to get the directory name
app.use('/',express.static(path.join(__dirname,'public'))) // look inside the public folder

app.use('/',require('./routes/root'))


// handle the 404 not found message to alert the user just in case
app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){

        res.json({message: '404 Not Found'})
    } else{
        res.type('txt').send('404 Not Found')
    }
}) 

//use the errorHandler
app.use(errorHandler)
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))