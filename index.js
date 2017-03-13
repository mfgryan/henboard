const http = require('http'),
    fs = require('fs');

var hostname = "henboard.com";
var port = 8000;

console.log("server running on http://"+ hostname + ":" + port);
http.createServer(function(request, response) {  
    
    //set route settings for url
    var fileName = "";
    var contentType = "";
    if(request.url =="/api"){
        fileName = "./api.json";
        contentType = "application/json";
    }else{
        fileName = "./index.html";
        contentType = "text/html";
    }
    //if post with data 
    //write to file
    
    //else read the file and respond 
    fs.readFile(fileName, function (err, file) {
        if (err) {
            throw err; 
        }       
        console.log("200 - " + fileName);
        response.writeHead(200, {"Content-Type": contentType});  
        response.write(file);  
        response.end();  
    });

}).listen(port,hostname);
