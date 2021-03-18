const { response } = require('express');
var bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const usuariosGet = async(req, res = response) => {

    const { size = 5, page = 0 } = req.query;

    const query = { estado: true };
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).limit(Number(size)).skip(Number(page) * Number(size))
    ]);
    return res.json({
        total,
        usuarios
    });
}
const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol });

    const salt = bcrypt.genSaltSync(11);
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    return res.json({
        usuario
    });
}
const usuarioDelete = async(req, res = response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

    return res.json({
        msg: "DELETE API controlador",
        id
    });
}
const usuarioPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, ...resto } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync(11);
        resto.password = bcrypt.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    return res.json({
        msg: "PUT API controlador",
        id
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuarioDelete,
    usuarioPut

}