const express = require("express")
const expressLayouts = require('express-ejs-layouts')


const app = express()


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

// app.use(express.json())
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', require('./routes/first')) 
app.use('/project', require('./routes/project')) 
app.use('/contact', require('./routes/contact')) 
app.use('/about', require('./routes/about')) 


app.listen(3000, () =>
    console.log("API running now"))