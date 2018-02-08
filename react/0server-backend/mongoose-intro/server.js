const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/food", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.use(bodyParser.json());
app.use("/food", require("./routes/food"));
// const Food = require("./models/food");

// const pizza = new Food({
//     name: "BBQ Chicken"
// });

// pizza.save((err) =>{
//     if(err) return console.log(err);
//     console.log(pizza);
    
// })

app.listen(8080, () =>{
    console.log("Server is running on port 8080");  
})

