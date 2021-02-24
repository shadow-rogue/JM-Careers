
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
// const searchbar = document.getElementById('searchbar');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html");
});

// const path = require('path');
// const options = {root:path.join(__dirname, "../views")}
app.post("/", function(req,res){

    var searchquery = req.body.searchbar;
    var x = searchquery.toLowerCase();

    console.log(x);
    var n = Number(x.search("web"));
    console.log(typeof n);

    if (Number(x.search("web")) >=0 ) {
        console.log(n);
        res.sendFile(__dirname + "/views/search_views/web.html");
    }
    else if (Number(x.search("android")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/android.html");
    }
    else if (Number(x.search("graphic")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/graphic.html");
    }
    else if (Number(x.search("writing")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/writing.html");
    }
    else if (Number(x.search("design")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/design.html");
    }
    else if (Number(x.search("manage")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/management.html");
    }
    else if (Number(x.search("market")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/market.html");
    }
    else if (Number(x.search("develop")) >=0 ) {
        res.sendFile(__dirname + "/views/search_views/develop.html");
    }
    else{
        res.send("No jobs found");

    }
    
});

// searchbar.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

app.listen (3000, function(){
    console.log("Server is running on port 3000");
});