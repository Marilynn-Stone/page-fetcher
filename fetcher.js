const fs = require('fs');
const request = require('request');
const argString = process.argv.slice(2);

request(`${argString[0]}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(`${argString[1]}`, body, error => {
    const fileSize = body.length;
    if (error) {
      console.error(error);
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${argString[1]}`);
  });
});