const express = require("express");

const app = express();


const PORT = process.env.PORT || 8080

// Setup all content from the public folder
app.use(express.static('public'));


// Start server on PORT
var server = app.listen(PORT, function () {
    var port = server.address().port;
    console.log(`Server started at http://localhost:${port}`);
});


