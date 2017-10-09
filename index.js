var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var port        =   8080
var mongoOp     =   require("./mongo");

app.use(bodyParser.urlencoded({"extended" : true}));
app.use(bodyParser.json());


app.get("/reservation", function(req, res) {
     var response = {};
     var name = req.query.name;
     var hotelName = req.query.hotelName;
         mongoOp.find({ name : name, hotelName:hotelName},function(err,data){
                         if(err) {
                             response = {"error" : true,"message" : "Error fetching data"};
                         } else {
                             response = {"message" : data};
                         }
                         res.json(response);
                     });

});

app.get("/reservations", function(req, res) {
     var response = {};
            mongoOp.find({},function(err,data){
                if(err) {
                    response = {"error" : true,"message" : "Error fetching data"};
                } else {
                    response = {"message" : data};
                }
                res.json(response);
            });
});

app.post("/reservations", function(req, res) {
   var db = new mongoOp();
              var response = {};

              db.name = req.body.name;
              db.hotelName = req.body.hotelName;
              db.arrivalDate = req.body.arrivalDate;
              db.departureDate = req.body.departureDate;

              db.save(function(err){

                  if(err) {
                      response = {"error" : true,"message" : err};
                  } else {
                      response = {"message" : "Reservation made"};
                  }
                  res.json(response);
              });
});

app.get("/reservations/:id", function(req, res) {
     var response = {};
            mongoOp.findById(req.params.id,function(err,data){
                if(err) {
                    response = {"error" : true,"message" : "Error fetching data"};
                } else {
                    response = {"error" : false,"message" : data};
                }
                res.json(response);
            });
 });

app.use('/',router);

app.listen(port);
console.log("Listening to PORT "+port);
