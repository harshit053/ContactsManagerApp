const express       = require("express"),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      passport      = require("passport"),
      LocalStrategy = require("passport-local"),
      User          = require("./models/user");

const app = express();

// requiring routes
const authRoutes  = require("./routes/auth"),
      indexRoutes = require("./routes/index");

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

app.use("/", authRoutes);
app.use("/", indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function() {
    console.log("Contacts app server has started on port" + port);
});