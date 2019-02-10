const categoriesRoutes = require('./routes/categoriesCtrl')
const Category = require('./models/category')
const scenariosRoutes = require('./routes/scenarioCtrl')
const Scenario = require('./models/category')
module.exports = function(expressServer) {
	expressServer.use('/categories', categoriesRoutes)
	expressServer.use('/scenarios', scenariosRoutes)
}
