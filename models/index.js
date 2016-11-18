//Set up Mongoose
var mongoose = require("mongoose");

//Make connection to database
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017ukr-blog", function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

//Set up Debug
mongoose.set("debug", true);

//Connect to user models
module.exports.User = require("./user");
module.exports.Post = require("./post");
