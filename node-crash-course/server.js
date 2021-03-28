const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, 'request made');

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<div>OK</div><div>, its working</div>');

    //* looks like status code can be both string and number
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = '200';
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end()
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
    }
    fs.readFile(path, (error, data) => {
        if (error) {
            console.error(error, 'unable to read html');
            res.end();
            return;
        }
        res.end(data);
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})