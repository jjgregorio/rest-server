const { response } = require('express');
var bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const usuariosGet = (req, res = response) => {

    query = req.query;
    return res.json({
        msg: "get API controlador",
        query
    });
}
const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol });

    const existeEmail= await Usuario.findOne({correo});

    if(existeEmail){
        return res.status(400).json({
            msg:"El correo ya está registrado"
        });
    }
    const salt = bcrypt.genSaltSync(11);
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    return res.json({
        msg: "Post API controlador",
        usuario
    });
}
const usuarioDelete = (req, res = response) => {

    const { id } = req.params;

    return res.json({
        msg: "DELETE API controlador",
        id
    });
}
const usuarioPut = (req, res = response) => {

    const { id } = req.params;

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