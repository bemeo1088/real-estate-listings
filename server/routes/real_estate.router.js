var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
    cost: Number,
    sqft: Number,
    city: String
});

var RentalSchema = new Schema({
    rent: Number,
    sqft: Number,
    city: String
})

// var Listing = mongoose.model('Listing', ListingSchema, 'listings');
var Rental = mongoose.model('Rental', RentalSchema, 'rentals');
var Listing = mongoose.model('Listing', ListingSchema, 'listings');

// POST Route for ADD RENTAL
router.post('/addRental', function (req, res) {
    console.log('req.body', req.body);
    var rentToAdd = new Rental(req.body);

    rentToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // END SAVE
}); // END POST Route


//GET route FOR RENTAL
router.get('/forRental', function (req, res) {

    Rental.find({}, function (err, foundRental) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        } else {
            res.send(foundRental);
        }
    }); // END FIND
}); // END GET Route


// POST Route for ADD LISTING
router.post('/addListing', function (req, res) {
    console.log('req.body', req.body);
    var saleToAdd = new Listing(req.body);

    saleToAdd.save(function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // END SAVE
}); // END POST Route


//GET route FOR SALE
router.get('/forSale', function (req, res) {

    Listing.find({}, function (err, foundListing) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        } else {
            res.send(foundListing);
        }
    }); // END FIND
}); // END GET Route

// DELETE Route for Rental
router.delete('/forRental/:id', function (req, res) {
    var rentId = req.params.id;
    Rental.findByIdAndRemove({ "_id": rentId }, function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
}); // END DELETE Route for Rental

// DELETE Route for Listing
router.delete('/forSale/:id', function (req, res) {
    var saleId = req.params.id;
    Listing.findByIdAndRemove({ "_id": saleId }, function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
}); // END DELETE Route for Listing

module.exports = router;
