const mongoose = require('mongoose')
const Schema = mongoose.Schema
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

mongoose.connect('mongodb://localhost/test');
var userSchema = new Schema({
  name: String,
  title: String,
  company: String,
  email: String,
  company: String,
  address: String
});

var User = mongoose.model('Users', userSchema);

router.get('/api', function(req, res){
	var handler = function(err, user){
		res.json({'data': user})
	}
	User.find({},handler)
})

router.post('/api', jsonParser, function (req, res) {
	if (!req.body) return res.sendStatus(400)
	var handle = function(e){
		res.json({'messags': 'added', 'user': e});
	}
  	const user = new User({
  		name: req.body.name,
  		title: req.body.title,
  		email : req.body.email,
  		phone: req.body.phone,
  		company: req.body.company,
  		address: req.body.address
  	})
	user.save(handle(user))
})

router.put('/api/', jsonParser, function(req, res) {
	if (!req.body.id)
		return res.sendStatus(400)

	const data = {
		name: req.body.name
	}
	const handler = function(err, user){
		if (err) 
			return res.sendStatus(400)

		res.json({'message': 'updated', data: user})
	}

	const user = User.findOneAndUpdate({_id: req.body.id}, data, handler)
})

router.delete('/api/', jsonParser, function(req, res) {
	const handler = function(err, users){
		if (err) 
			return res.sendStatus(400)

		res.json({'messages' : 'DELETED'})
	}
	User.findOneAndRemove({'_id': req.body.id}, handler)
});

router.get('/api/users/:id', function(req, res){
	const id = req.params.id
	var handler = function(err, user){
		res.json({'data': user})
	}
	User.find({_id: id},handler)
})
module.exports  = router