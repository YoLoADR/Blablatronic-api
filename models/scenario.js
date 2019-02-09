const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ScenarioSchema = new Schema({
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	storyline: { type: String, unique: true },
	description: { type: String, default: '' },
	rate: { type: Number, default: 1 }
})

module.exports = mongoose.model('Scenario', ScenarioSchema)
