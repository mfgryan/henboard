const http = require('http'),
    fs = require('fs');

var hostname = "localhost";
var port = 8000;

console.log("server running on http://"+ hostname + ":" + port);
http.createServer(function(request, response) {  
    
    //set route settings for url
    var fileName = "";
    var contentType = "";
    
    var routes = {
        "/api": {
            fileName: "./api.json",
            contentType: "application/json"
        },
        "/main.js": {
            fileName: "./main.js",
            contentType: "text/javascript"
        },
        "/style.css": {
            fileName: "./style.css",
            contentType: "text/css"
        },
        "/": {
            fileName: "./index.html",
            contentType: "text/html"
        }
    };
    var route = request.url in routes ? routes[request.url] : routes["/"];

    //if api post with data 
    //write to file
    
    //else read the file and respond 
    fs.readFile(route.fileName, function (err, file) {
        if (err) {
            throw err; 
        }       
        console.log(request.url + " 200 - " + route.fileName);
        response.writeHead(200, {"Content-Type": route.contentType});  
        response.write(file);  
        response.end();  
    });

}).listen(port,hostname);
