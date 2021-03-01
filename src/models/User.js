const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	id: mongoose.ObjectId,
	first_name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('user', UserSchema);
