const mongoose = require('mongoose')
const Schema = mongoose.Schema
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
require('dotenv').config()
console.log(process.env.MONGODB_URL)

mongoose.connect('mongodb://localhost/test');
var userSchema = new Schema({
  name: String,
  title: String,
  company: String,
  email: String,
  phone: String,
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

/**
 * @param {string} name name users
 * @param {string} title title
 * @param {string} email Email
 * @param {string} phone Phone
 * @param {string} company Company
 * @param {string} address Address
 * @return {json} json
 */
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

/**
 * [description]
 * @param {object} data
 * @author Nipe Harefa <nipeharefa@gmail.com>
 */
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

/**
 * Delete users
 * @param  {string} iduser
 * @return json
 */
router.delete('/api/', jsonParser, function(req, res) {
	const handler = function(err, users){
		if (err){
			return res.sendStatus(400)
		}

		res.json({'messages' : 'deleted'})
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
