var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var RealEstateSchema = new Schema ({
    cost: Integer,
    sqft: int32,
    
})