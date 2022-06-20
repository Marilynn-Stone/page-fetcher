node app takes in a URL and a local file path
download resource at URL to local path
print message on completion: "Downloaded and saved 3261 bytes to ./index.html"

node fetcher.js http://www.example.edu/ ./index.html

2 asynch operations
- make http request and wait for response
- take data received and write to file in local system
  * use nested callbacks

1 character = 1 byte 