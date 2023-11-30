const http = require('http');
// bu yerda serverni creat qildik
const server = http.createServer((request, response) => {
    console.log(request.url);

    // response.write('Hello world');
    response.write('<h1>Hello world</h1>');
    response.end();
});

// bu yerda endi serverni qayerdadir kuzatib borishimiz kerak bo'ladi

server.listen(3000, () => {
    console.log('Server has been started on 3000 port');
});
