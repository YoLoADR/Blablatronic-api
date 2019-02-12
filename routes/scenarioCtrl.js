const router = require('express').Router()
const Scenario = require('../models/scenario')
var Category = require('../models/category')

//SCENANIO
router.get('/shows', function(req, res, next) {
	Scenario.find(function(err, scenarios) {
		if (err) return next(err)
		return res.status(200).json({ scenarios: scenarios })
	})
})

router.post('/create', function(req, res, next) {
	Category.findOne({ name: req.body.category })
		.populate('category')
		.exec(function(err, category) {
			if (err) return next(err)

			const scenario = new Scenario({
				storyline: req.body.storyline,
				description: req.body.description,
				language: req.body.language,
				formulation: req.body.formulation,
				category: [category._id]
			})

			scenario.save(function(err) {
				if (err) return next(err)
				res.status(200).json({ status: 'Successfully added a scenario' })
			})
		})
})

module.exports = router
