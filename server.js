const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set EJS
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.render("index", { name: null, email: null });
});

// Handle form submission
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    res.render("index", { name, email });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
