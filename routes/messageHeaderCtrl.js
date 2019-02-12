const router = require('express').Router()
const MessageHeader = require('../models/messageHeader')
var Category = require('../models/category')

//SCENANIO
router.get('/', function(req, res, next) {
	MessageHeader.find(function(err, messageHeader) {
		if (err) return next(err)
		return res.status(200).json({ messageHeaders: messageHeader })
	})
})

router.post('/create', function(req, res, next) {
	Category.findOne({ name: req.body.category })
		.populate('category')
		.exec(function(err, category) {
			if (err) return next(err)

			const messageHeader = new MessageHeader({
				storyline: req.body.storyline,
				description: req.body.description,
				language: req.body.language,
				formulation: req.body.formulation,
				category: [category._id]
			})

			messageHeader.save(function(err) {
				if (err) return next(err)
				res.status(200).json({ status: 'Successfully added a messageHeader' })
			})
		})
})

module.exports = router
