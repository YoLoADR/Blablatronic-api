const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ScenarioSchema = new Schema({
	category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
	storyline: { type: String, unique: true },
	description: { type: String, default: '' },
	language: { type: String, default: 'Français' },
	rate: { type: Number, default: 1 },
	formulation: { type: String, default: 'Formal' }
})

module.exports = mongoose.model('Scenario', ScenarioSchema)
