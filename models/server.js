const express = require('express')
const cors = require('cors')
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
       
        this.USUARIOS_PATH='/api/usuarios/';
       
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
       this.app.use(this.USUARIOS_PATH,require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Iniciando en puerto ${this.port}`);
        });
    }
}

module.exports = Server;