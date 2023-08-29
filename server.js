 // Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app

app.get('/', function(req, res) {
    res.send('<h1 style="color: navy; font-family: Avenir;">Express is Working!</h1>');
  });

// Define new routes
  app.get('/greetings', function(req, res) {
    res.send('<h1>Hello, stranger.</h1>');
});

// Step 2
app.get('/greetings/:name', function(req, res) {
    res.send('<Name>Hello, Jimmy Boy! It is so great to see you.</Name>');
});


//tip
app.get('/tip/:total/:tipPercentage', function(req, res) {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    res.send(`Your tip amount is: ${tipAmount}`);
});

// Tell the app to listen on port 3000

app.listen(3000, function () {
  console.log('Listening on port 3000');
});