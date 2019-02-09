const router = require('express').Router()
const Scenario = require('../models/scenario')

//SCENANIO
router.get('/', function(req, res, next) {
	Scenario.find(function(err, scenarios) {
		if (err) return next(err)
		return res.status(200).json({ scenarios: scenarios })
	})
})

router.post('/add-scenario', function(req, res, next) {
	const name = req.body.name
	const storyline = req.body.storyline
	const description = req.body.description

	const scenario = new Scenario({
		name: name,
		storyline: storyline,
		description: description
	})

	scenario.save(function(err) {
		if (err) return next(err)
		res.status(200).json({ status: 'Successfully added a scenario' })
	})
})

module.exports = router
