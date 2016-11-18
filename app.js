//Express
var express = require('express');
		 	app = express();
		 	methodOverride = require('method-override'),
			morgan = require("morgan"),
			cookieParser = require('cookie-parser'),
			bodyParser = require('body-parser'),
			passport = require('passport'),
			session = require('express-session'),
			path = require("path"),
			postRoutes = require('./routes/posts.js');
		


app.use(express.static(__dirname + '/public'));

//Passport
require('./config/passport')(passport); //passport configuration

//Cookie and Session
app.use(session({
	secret: 'awesome',
	resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// use morgan
app.use(morgan("tiny"));
// use method-override
app.use(methodOverride('_method'));

app.use('/api/posts', postRoutes);

require('./routes/auth.js')(app,passport); //load our routes and full configured passport

app.listen(process.env.PORT || 3000, function(req,res){
	console.log("App running on localost 3000");
});
