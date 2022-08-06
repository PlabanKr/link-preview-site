const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const routes = require("./route");

app = express();

// setting EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// use static assets
app.use(express.static(__dirname + "/public"));

// parse req.body for form-url-encoded data
app.use(express.urlencoded({ extended: true }));

// cookies
app.use(cookieParser());

// routes
app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
