const http = require('http');
const dt = require('./DateTime');
const url = require('url');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write("This is not a test " + dt.date());
    let q = url.parse(req.url, true).query;
    res.write(q.year + " " + q.month);
    res.end();
}).listen(8080)