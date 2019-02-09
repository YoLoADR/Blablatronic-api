//const adminRoutes = require('./routes/admin')
const categoriesRoutes = require('./routes/categoriesCtrl')
const Category = require('./models/category')
const scenariosRoutes = require('./routes/categoriesCtrl')
const Scenario = require('./models/category')
module.exports = function(expressServer) {
	// TODO : ai-je besoin de supprimer ce bloque
	expressServer.use(function(req, res, next) {
		Category.find({}, function(err, categories) {
			if (err) return next(err)
			res.locals.categories = categories
			next()
		})
	})

	expressServer.use('/categories', categoriesRoutes)
	expressServer.use('/scenarios', scenariosRoutes)
}
