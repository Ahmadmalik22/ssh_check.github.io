const express=require("express")
const app=express();
const hbs=require("hbs")
const path=require("path")
const staticpath=path.join(__dirname,"../public")
const partialspath=path.join(__dirname,"../src/partials")


hbs.registerPartials(partialspath);
app.use(express.static(staticpath))
app.set("view engine","hbs")
app.get("/",(req,res)=>{
res.render("index")
})
app.get("/about",(req,res)=>{
res.render("about")
})
// console.log(staticpath);
// app.get("/",(req,res)=>{
// res.send("hello")
// })




app.listen(3000,()=>{
    console.log("server is created");
})