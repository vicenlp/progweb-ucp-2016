var http = require('http');
var url = require("url");
var port = process.env.port || 1337;


http.createServer(function (req, res) {
    
    var urlParseada = url.parse(req.url, true);

    //Listado de variables en querystring
    for (q in urlParseada['query']) {
        console.log(q + " = " + urlParseada['query'][q]);
    }
    
    var cantidadItems = urlParseada['query'].cantidad || 1;


    //Verificar request
    var posicionBarra = req.url.toString().indexOf('/', 1);
    var carpeta = req.url.toString().substring(1, posicionBarra);

    console.log(carpeta); 
    
    if (carpeta.length > 3) {
        var app = require('./' + carpeta + '/app.js');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<h1>');
        res.write('Carpeta: ' + carpeta);
        res.write('<br />');
        res.write('Nombre: ' + app.nombre());
        res.write('</h1>');
        res.end(app.opciones(cantidadItems));
        
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>');
        res.write('Carpeta no encontrada!');
        res.end('</h1>');
    }
    
    
    
}).listen(port);

