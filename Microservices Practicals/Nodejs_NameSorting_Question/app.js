// Requiring module
const express = require('express');

const NameSort = require('./NameSort');

// Creating express object
const app = express();

// Handling GET request
app.get('/NameSort', (req, res) => {
	res.send(NameSort)
	
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
