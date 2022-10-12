const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000 // which port the server runs on

//an express middleware to process json
app.use(express.json())


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
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))