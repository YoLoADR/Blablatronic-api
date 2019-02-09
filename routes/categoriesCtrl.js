var router = require('express').Router()
var Category = require('../models/category')

//CATEGORIES
router.get('/', function(req, res, next) {
	Category.find(function(err, categories) {
		if (err) return next(err)
		return res.status(200).json({ categories: categories })
	})
})

router.get('/add-category', function(req, res, next) {
	res.json({ message: 'success' })
})

//Postman
//Method : POST
//URL : localhost:3003/categories/add-category
//Headers : key = Content-Type  / value = application/x-www-form-urlencoded
//Body : raw
// {
//     "name":"lead"
// }
router.post('/add-category', function(req, res, next) {
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
