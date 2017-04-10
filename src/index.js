const http = require('http'), fs = require('fs'), qs = require('querystring');

var hostname = process.argv.length > 2 ? process.argv[2] : "localhost";
var port = process.argv.length > 3 ? process.argv[3] : "8000";

var routes = {
        "/api": {
            fileName: "../data/api.json",
            contentType: "application/json"
        },
        "/modules":{
            fileName: "/",
            contentType: "text/javascript"
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

console.log("server running on http://"+ hostname + ":" + port);

http.createServer(function(request, response) {  
    var route = request.url in routes ? routes[request.url] : routes["/"];
    //add line to parse modules direcotry file and edit route var accordingly
    
    var body = '';
    request.on('data', function (data) {
        body += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) { 
            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            request.connection.destroy();
        }
    });
    
    request.on('end', function () {
        //var data = qs.parse(body); in case you need to access object properties
        if(request.url == "/api" && request.method == "POST"){
            fs.writeFile(route.fileName,body,function(err){
                if (err) throw err;
                console.log(request.url + " 200 - " + route.fileName + " " + request.method)
                response.writeHead(200);
                response.end(); 
            }); 
        }else{
            fs.readFile(route.fileName, function (err, file) {
                if (err) throw err; 
                console.log(request.url + " 200 - " + route.fileName + " " + request.method);
                response.writeHead(200, {"Content-Type": route.contentType});  
                response.write(file);  
                response.end();  
            });
        }
    });
    
}).listen(port,hostname);
