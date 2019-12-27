const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    let campgrounds = [
        {name: "Big Bear", image: "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"},
        {name: "Lake Arrowhead", image: "https://images.unsplash.com/photo-1484179544078-56b3c0e9ca7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"},
        {name: "Joshua Tree", image: "https://images.unsplash.com/photo-1486012345871-f47c8c407079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"}
    ];
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => console.log("YelpCamp has started"));