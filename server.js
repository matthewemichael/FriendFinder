var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app); 
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});