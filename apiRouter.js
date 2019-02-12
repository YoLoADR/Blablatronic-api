const categoriesRoutes = require('./routes/categoriesCtrl')
const scenariosRoutes = require('./routes/scenarioCtrl')
const additionalDetailRoutes = require('./routes/additionalDetailCtrl')
const messageHeaderRoutes = require('./routes/messageHeaderCtrl')
const messageFooterRoutes = require('./routes/messageFooterCtrl')
module.exports = function(expressServer) {
	expressServer.use('/categories', categoriesRoutes)
	expressServer.use('/scenarios', scenariosRoutes)
	expressServer.use('/additional-detail', additionalDetailRoutes)
	expressServer.use('/message-header', messageHeaderRoutes)
	expressServer.use('/message-footer', messageFooterRoutes)
}
