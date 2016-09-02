var express = require('express')
var router = require('./route/api')
var auth = require('./middleware/basic')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 8081

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.get('/', auth ,function(req, res){
	res.render('index')
})
app.listen(port, function(){
	console.log("Running on ", port)
})