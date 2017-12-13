var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/mydb', {
useMongoClient: true
});

var mongoSchema =   mongoose.Schema;

var hotelBooking  = {
    "name" : String,
    "hotelName" : String,
    "arrivalDate" : String,
    "departureDate" : String
};
module.exports = mongoose.model('hotelBooking',hotelBooking);
