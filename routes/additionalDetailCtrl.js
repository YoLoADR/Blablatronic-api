const router = require('express').Router()
const AdditionalDetail = require('../models/additionalDetail')
var Category = require('../models/category')

//SCENANIO
router.get('/shows', function(req, res, next) {
	AdditionalDetail.find(function(err, additionalDetail) {
		if (err) return next(err)
		return res.status(200).json({ additionalDetails: AdditionalDetail })
	})
})

router.post('/create', function(req, res, next) {
	Category.findOne({ name: req.body.category })
		.populate('category')
		.exec(function(err, category) {
			if (err) return next(err)

			const additionalDetail = new AdditionalDetail({
				storyline: req.body.storyline,
				description: req.body.description,
				language: req.body.language,
				formulation: req.body.formulation,
				category: [category._id]
			})

			additionalDetail.save(function(err) {
				if (err) return next(err)
				res.status(200).json({ status: 'Successfully added a additionalDetail' })
			})
		})
})

module.exports = router
