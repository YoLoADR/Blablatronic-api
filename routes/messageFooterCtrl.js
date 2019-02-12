const router = require('express').Router()
const MessageFooter = require('../models/messageFooter')
var Category = require('../models/category')

//SCENANIO
router.get('/', function(req, res, next) {
	MessageFooter.find(function(err, messageFooter) {
		if (err) return next(err)
		return res.status(200).json({ messageFooters: messageFooter })
	})
})

router.post('/create', function(req, res, next) {
	Category.findOne({ name: req.body.category })
		.populate('category')
		.exec(function(err, category) {
			if (err) return next(err)

			const messageFooter = new MessageFooter({
				storyline: req.body.storyline,
				description: req.body.description,
				language: req.body.language,
				formulation: req.body.formulation,
				category: [category._id]
			})

			messageFooter.save(function(err) {
				if (err) return next(err)
				res.status(200).json({ status: 'Successfully added a messageFooter' })
			})
		})
})

module.exports = router
