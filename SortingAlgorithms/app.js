// Requiring module
const express = require('express');


const BubbleSort = require("./BubbleSort");
const InsertionSort = require("./InsertionSort");
const MergeSort = require("./MergeSort");
const SelectionSort = require("./SelectionSort");
const QuickSort = require("./QuickSort");



// Creating express object
const app = express();


// // Handling GET request
app.get('/BubbleSort', (req, res) => {
    res.send("<h1>Bubble Sort Algorithm: </h1>" + "<br>"+
    "<h2> Array to be sort: " +"<br>"+" [13, 8, 200, 23, 749, 9306, 42, 5, 502, 32, 12, 737] </h2>" +  "<br>"+
    "<h2> Sorted Numbers using Bubble Sort Algorithm: <h2> " + "{" + BubbleSort + "}");
})

app.get('/InsertionSort', (req, res) => {
    res.send("<h1>Insertion Sort Algorithm: </h1>" + "<br>"+
    "<h2> Array to be sort: " +"<br>"+"  [100,43,4,329,19,265,-235,89,3922,2,487,42,646] </h2>" +  "<br>"+
    "<h2> Sorted Numbers using Insertion Sort Algorithm: <h2> " + "{" + InsertionSort + "}");

})
app.get('/MergeSort', (req, res) => {
    res.send("<h1>Merge Sort Algorithm: </h1>" + "<br>"+
    "<h2> Array to be sort: " +"<br>"+"  [212,4,341,26,24,445,37,339,33329,42,53,8342] </h2>" +  "<br>"+
    "<h2> Sorted Numbers using MergeSort Algorithm: <h2> " + "{" + MergeSort + "}");

})
app.get('/SelectionSort', (req, res) => {
    res.send("<h1>Selection Sort Algorithm: </h1>" + "<br>"+
    "<h2> Array to be sort: " +"<br>"+"  [43, 56, 2, 653, 73, 693, 23, 1, 593, 3, 13] </h2>" +  "<br>"+
    "<h2> Sorted Numbers using Selection Sort Algorithm: <h2> " + "{" + SelectionSort + "}");

})
app.get('/QuickSort', (req, res) => {
    res.send("<h1>Quick Sort Algorithm: </h1>" + "<br>"+
    "<h2> Array to be sort: " +"<br>"+"  [21, 100, 17, 93, -39, 70, 192,30, 10, 530 ]</h2>" +  "<br>"+
    "<h2> Sorted Numbers using Quick Sort Algorithm: <h2> " + "{" + QuickSort + "}");
})

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
