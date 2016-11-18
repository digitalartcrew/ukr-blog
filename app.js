//Express
var express = require('express');
		 	app = express();
		 	methodOverride = require('method-override'),
			morgan = require("morgan"),
			cookieParser = require('cookie-parser'),
			bodyParser = require('body-parser'),
			passport = require('passport'),
			path = require("path"),
			session = require('express-session'),
			// MongoStore = require('connect-mongo')(session),
			// mongoose = require("mongoose"),
			postRoutes = require('./routes/posts.js');
		

require('./config/passport')(passport); //passport configuration

app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "some secret key",
    saveUninitialized: true, // (default: true)
    resave: true, // (default: true)
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),

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
