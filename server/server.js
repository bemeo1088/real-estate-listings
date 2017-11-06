var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var realEstate = require('./routes/real_estate.router.js');
var port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/realEstate', realEstate);

/** ---------- MONGOOSE ------------ **/
var mongoose = require('mongoose');
// realestate is the name of our database
// 27017 is the default mongo port number
var mongoURI = '';


// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(mongoURI, {
    useMongoClient: true
});


// then check if connection to mongoose if sucessful or fail
mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});
//mongoose.connect(mongoURI);  // to link the var mongoURI above to mongoose
// Eventually, the mongoose code should be in a module

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
