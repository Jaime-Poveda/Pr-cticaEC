//Para iniciar el server: node server.js (desde el terminal situándose en la carpeta en la que está el fichero)

const http = require('http');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 5000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

    if (req.url === "/saveUsers") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
            saveUsers(data);
        })
    }
    if (req.url === "/saveProductions") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
            saveProductions(data);
        })
    }
    if (req.url === "/saveCategories") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
            saveCategories(data);
        })
    }
    if (req.url === "/saveActors") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
            //console.log(JSON.parse(data).length);
            saveActors(data);
        })
    }
    if (req.url === "/saveDirectors") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
            saveDirectors(data);
        })
    }
});


function saveUsers(data) {
    fs.writeFile(`../../json/backup/usuarios_${(new Date().toJSON().slice(0,10))}_${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.json`, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Success!");
        }
    });
}
function saveProductions(data) {
    fs.writeFile(`../../json/backup/producciones_${(new Date().toJSON().slice(0,10))}_${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.json`, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Success!");
        }
    });
}
function saveCategories(data) {
    fs.writeFile(`../../json/backup/categorias_${(new Date().toJSON().slice(0,10))}_${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.json`, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Success!");
        }
    });
}
function saveActors(data) {
    fs.writeFile(`../../json/backup/actores_${(new Date().toJSON().slice(0,10))}_${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.json`, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Success!");
        }
    });
}
function saveDirectors(data) {
    fs.writeFile(`../../json/backup/directores_${(new Date().toJSON().slice(0,10))}_${(new Date()).getHours()}-${(new Date()).getMinutes()}-${(new Date()).getSeconds()}.json`, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Success!");
        }
    });
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});