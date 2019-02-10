const router = require('express').Router()
const Scenario = require('../models/scenario')
var Category = require('../models/category')

//SCENANIO
router.get('/', function(req, res, next) {
	console.log('post reçu')
	Scenario.find(function(err, scenarios) {
		if (err) return next(err)
		return res.status(200).json({ scenarios: scenarios })
	})
})

router.post('/add-scenario', function(req, res, next) {
	Category.findOne({ name: req.body.category })
		.populate('category')
		.exec(function(err, category) {
			if (err) return next(err)

			const scenario = new Scenario({
				storyline: req.body.storyline,
				description: req.body.description,
				category: category._id
			})

			scenario.save(function(err) {
				if (err) return next(err)
				res.status(200).json({ status: 'Successfully added a scenario' })
			})
		})
})

module.exports = router
