const fs = require('fs');
const request = require('request');
const argString = process.argv.slice(2);


const content = 'Some content!';

request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.writeFile('text', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});