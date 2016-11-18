// load the things we need
var mongoose = require('mongoose');
// define the schema for our user model
var postSchema = mongoose.Schema({
   	imageUrl: String, 
	title: String, 
	author: String,
	description: String,
	display:  {type: Date, default: Date.now},
	comments: [{author: String, text: String},{author:String, text: String}],
	meta : {
		voteCount: Number
	}

});
// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema);

