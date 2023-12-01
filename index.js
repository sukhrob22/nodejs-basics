const http = require('http');
const fs = require('fs');
const path = require('path');

// bu yerda serverni creat qildik
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        //nodejsda  qandaydir ma'lumot chiqarayotganimizda biz uning html yo json bo'lib chiqish uchun writeHead methodidan foydalanamiz
        res.writeHead(200, { 'Content-Type': 'text/html' });

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'templates', 'index.html'),
                'utf-8',
                (err, conten) => {
                    if (err) throw err;
                    res.end(conten);
                }
            );
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'templates', 'about.html'),
                'utf-8',
                (err, conten) => {
                    if (err) throw err;
                    res.end(conten);
                }
            );
        } else if (req.url === '/contact') {
            fs.readFile(
                path.join(__dirname, 'templates', 'contact.html'),
                'utf-8',
                (err, conten) => {
                    if (err) throw err;
                    res.end(conten);
                }
            );
        }

        // res.end(`
        // <h2>Send name</h2>
        // <form method="post" action="/">
        //    <input  name="name" placeholder="Enter your name"/>
        //    <button type="submit">Send name</button>
        // </form>
        // `);
    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        req.on('data', (data) => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            // console.log(email.toString());
            const message = body.toString().split('=')[1];

            res.end(`Name successfully added АВЫАЫЛРДОР: ${message}`);
        });
    }

    // console.log(request.method);

    // response.write('Hello world');
    // response.write('<h1>Hello world 2</h1>');
    // response.write('<h2>Hello world 4</h2>');
    // response.end('<h1>Hello world 4</h1>');
});

// bu yerda endi serverni qayerdadir kuzatib borishimiz kerak bo'ladi

server.listen(3000, () => {
    console.log('Server has been started on 3000 port');
});
