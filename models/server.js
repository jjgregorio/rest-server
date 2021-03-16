const express = require('express')
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({ ok: true, msg: "get API" })
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Iniciando en puerto ${this.port}`);
        });
    }
}

module.exports = Server;