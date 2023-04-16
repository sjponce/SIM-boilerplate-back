exports = module.exports = function(app, mongoose) {

	var rowSchema = new mongoose.Schema({
		name: 		{ type: String },
		i: 		{ type: Number },
	});
	mongoose.model('row', rowSchema);
};