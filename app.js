const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require("path");
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/assets")));
const Events = require('./models/events');


mongoose.connect('mongodb://127.0.0.1:27017/Project1')
    .then(() => {
        console.log('Connected to Database!');
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", async (req, res) => {
    const allEvents = await Events.find({});
    res.render("events/events.ejs", { allEvents });
})

app.listen(3000, () => {
    console.log("App is listening to port 3000")
})