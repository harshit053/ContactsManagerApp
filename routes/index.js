const express = require("express"),
      router  = express.Router(),
      Contact = require("../models/contact");

// Index Routes
router.get("/contacts", isLoggedIn, function(req, res) {
    Contact.find({}, function(err, contacts) {
        if(err) {
            console.log(err);
        } else {
            res.render("index/contacts", {contacts: contacts, currentUser: req.user});
        }
    }); 
});

router.post("/contacts", isLoggedIn, function(req, res) {
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

// middleware function to check if a user logged in or not
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

module.exports = router;