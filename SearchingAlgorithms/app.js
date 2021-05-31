// Requiring module
const express = require('express');

const LinearSearch = require("./LinearSearch");
const BinarySearch = require("./BinarySearch");


// Creating express object
const app = express();

// Handling GET request
app.get('/LinearSearch', (req, res) => {
    res.send(" <h1> Linear Search Algorithm: </h1>" + "<br>"+
    "<h2>Index of the element is : " + LinearSearch );
})

app.get('/BinarySearch', (req, res) => {
    res.send(" <h1>Binary Search Algorithm: </h1>" + "<br>"+
    "<h2>Index of the element is : " + BinarySearch );
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
