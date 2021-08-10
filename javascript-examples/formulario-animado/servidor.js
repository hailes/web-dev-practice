// var express = require("express");

// var servidor = express();

// servidor.use(express.static("./"));

// servidor.set("view_engine", "jade");

// servidor.get("/", function (req, res) {
//     res.render("index");
// });

// servidor.listen(8080);

const http = require("http");
const fs = require("fs");
const path = require("path");

function sitioWeb(req, res)
{
    console.log(`${req.method} solicita ${req.url}`);
    
    // res.writeHead(200, {"content-type": "text/html"});
    // res.end("Mi primer servidor");

    if (req.url == '/') {
        fs.readFile('./index.html', 'UTF-8', (err, html) => {
            res.writeHead(200, {"content-type": "text/html"});
            res.end(html);
        });
    } else {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("404 Error!");
    }
}

let servidor = http.createServer(sitioWeb);

// servidor.listen(7000, "127.0.0.1");
// servidor.listen(7000, "localhost");
// 7000 es el puerto, 127.0.0.1 es el IP siempre para mi local
// poner 127.0.0.1 es lo mismo que localhost

servidor.listen(7000, "192.168.1.10");  // esto es con la mi IP asignada por mi router

console.log("Servidor corriendo en el puerto 7000");