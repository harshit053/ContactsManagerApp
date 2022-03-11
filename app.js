const express       = require("express"),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      passport      = require("passport"),
      LocalStrategy = require("passport-local"),
      User          = require("./models/user");
      Contact       = require("./models/contact")

const app = express();

var url = process.env.DATABASEURL || "mongodb://localhost/ContactsApp";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Attack on titan is the best anime ever",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/signup", function(req, res) {
    res.render("index/signup");
});

app.post("/signup", function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("index/signup");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/contacts")
        });
    });
});

app.get("/signin", function(req, res) {
    res.render("index/signin");
});

app.post("/signin", passport.authenticate("local",
    {
        successRedirect: "/contacts",
        failureRedirect: "/signin"
    }), function(req, res) {
});

app.get("/contacts", isLoggedIn, function(req, res) {
    Contact.find({}, function(err, contacts) {
        if(err) {
            console.log(err);
        } else {
            res.render("index/contacts", {contacts: contacts, currentUser: req.user});
        }
    })
    
});

app.post("/contacts", isLoggedIn, function(req, res) {
    var name = req.body.name;
    var phno = req.body.phno;
    var email = req.body.email;
    var author = {
        id: req.user._id
    };
    var newContact = {name: name, phno: phno, email: email, author: author};

    Contact.create(newContact, function(err, newlyCreatedContact) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/contacts");
        }
    });

});

app.get("/signout", function(req, res){
    req.logout();
    res.redirect("/signin");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function() {
    console.log("Contacts app server has started on port" + port);
});