// load the things we need
var mongoose = require('mongoose');
// define the schema for our user model
var postSchema = mongoose.Schema({
   	imageUrl: { type: String, default: "http://placehold.it/150x150" },
	title: { type: String, required: true }, 
	author: { type: String, required: true },
	description: { type: String, required: true },
	display:  {type: Date, default: Date.now},
	comments: [{author: String, text: String},{author:String, text: String}],
	voteCount: {type: Number, default: 0}
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema);

