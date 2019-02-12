var router = require('express').Router()
var Category = require('../models/category')

//CATEGORIES
router.get('/shows', function(req, res, next) {
	Category.find(function(err, categories) {
		if (err) return next(err)
		return res.status(200).json({ categories: categories })
	})
})

router.post('/create', function(req, res, next) {
	const name = req.body.name
	const category = new Category({
		name: name
	})

	category.save(function(err) {
		if (err) return next(err)
		res.status(200).json({ status: 'Successfully added a category' })
	})
})

module.exports = router
