const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
let items= [];
let workItem=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
let day=date;

res.render("list",{listTitle: day,newListItem: items});
});
app.post("/", function(req,res){
  var item=req.body.newItem;
if (req.body.list==="work") {
  workItem.push(item);
    res.redirect("/work");
}
else {
  items.push(item);
  res.redirect("/");
}

});
app.get("/work",function(req,res){
  res.render("list",{listTitle: "work list", newListItem: workItem});
});
app.get("/about",function(req,res){
  res.render("about");
});
app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItem.push(item);
  res.redirect("/workItem");
});
app.listen(3000,function(){
  console.log("Server started on port 3000");
})
