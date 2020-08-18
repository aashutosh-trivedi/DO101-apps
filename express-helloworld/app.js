var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n This is an update from Aashutosh');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

