const express = require("express")
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req,res){
    res.render("index")
})
app.get("/about", function(req,res){
    res.render("about")
})
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);