const mongoose = require('mongoose');
require('dotenv')

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Base de datos online');

    } catch (error) {
        console.log(error)
        throw new Error('Error al conectar en la base de datos')
    }
}

module.exports = {
    dbConnection
}