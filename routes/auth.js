const express  = require("express"),
      router   = express.Router(),
      passport = require("passport"),
      User     = require("../models/user");

// Authentication Routes
router.get("/signup", function(req, res) {
    res.render("index/signup");
});

router.post("/signup", function(req, res) {
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

router.get("/signin", function(req, res) {
    res.render("index/signin");
});

router.post("/signin", passport.authenticate("local",
    {
        successRedirect: "/contacts",
        failureRedirect: "/signin"
    }), function(req, res) {
});

router.get("/signout", function(req, res){
    req.logout();
    res.redirect("/signin");
});

module.exports = router;