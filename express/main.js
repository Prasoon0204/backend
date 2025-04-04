const express = require("express");
const app = express();
const port = 3000;

// user middleware
const adi = (req,res,next) => {
    const age = req.query.age;
    if(!age) res.send("Please enter age");
    else if(age < 18) res.send("Sorry your age is under 18");
    else next();
}

const xyz = (req,res,next) => {
    const name = req.query.name;
    if(!name) res.send("Enter name");
    else if(name !== "harsh") res.send("Action not allowed");
    else next();
}
app.use(xyz);
// app.use(adi); //application middleware

app.get("/",(req,res) => {
    res.send("This is my home page");
})

app.get("/about",(req,res) => {
    res.send("This is my about page");
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`)
})