var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/mydb');

var mongoSchema =   mongoose.Schema;

var hotelBooking  = {
    "name" : String,
    "hotelName" : String,
    "arrivalDate" : String,
    "departureDate" : String
};
module.exports = mongoose.model('hotelBooking',hotelBooking);