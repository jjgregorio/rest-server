const { Schema, model } = require('mongoose')

const RoleSchema = Schema({
    rol: {
        type: String,
        requied: [true, 'El Rol es obligatorio']
    }
});

module.exports = model('Role', RoleSchema);