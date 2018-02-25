var http = require('http');
var fs = require('fs');

http.createServer(function (req, response) {
    fs.readFile('index.html', 'utf-8', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}).listen(1337, '127.0.0.1');

/*var content = fs.readFileSync("prize.json");
var jsonContent = JSON.parse(content);
console.log("vystup je :"+content);
*/
console.log('Server running at http://127.0.0.1:1337/');
