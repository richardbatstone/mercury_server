// This is a very small node server which just acts as a wrapper for the Postlight Mercury web parser (https://mercury.postlight.com/)
// To use it, post to the local host (either with a python request, or with curl e.g.
//curl -i -H "Content-Type: application/json" -X POST -d "{\"url\":\"https://www.bbc.co.uk/news/world-us-canada-47410846\"}"
// http://localhost:8080/
// It returns a JSON object being the result of the Mercury parse of the given url.


var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const Mercury = require('@postlight/mercury-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    var text = req.body.url;
    Mercury.parse(text)
        .then(output => res.json(output));
});

app.listen(8080, () => {
 console.log("Server running on port 8080");
});

