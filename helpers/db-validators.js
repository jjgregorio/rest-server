const Role = require('../models/rol')
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
};

const emailExiste = async(correo = '') => {

    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado en la BD`)
    }
};

const usuarioExistePorId = async(id = '') => {
    const usuarioExiste = await Usuario.findById(id);

    if (!usuarioExiste) {
        throw new Error(`El usuario no existe en la BD`)
    }
};

module.exports = {
    usuarioExistePorId,
    esRoleValido,
    emailExiste
}