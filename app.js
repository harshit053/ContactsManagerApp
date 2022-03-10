const express       = require("express"),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      passport      = require("passport"),
      LocalStrategy = require("passport-local");
const res = require("express/lib/response");

const app = express();

var url = process.env.DATABASEURL || "mongodb://localhost/ContactsApp";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/signin", function(req, res) {
    res.render("index/signin");
})

app.get("/signup", function(req, res) {
    res.render("index/signup");
})

app.get("/contacts", function(req, res) {
    res.render("index/contacts");
})

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function() {
    console.log("Contacts app server has started on port" + port);
})