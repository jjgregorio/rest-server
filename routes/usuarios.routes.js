const { Router } = require('express');
const { check } = require('express-validator');

const {
    usuariosGet,
    usuariosPost,
    usuarioDelete,
    usuarioPut
} = require('../controllers/usuarios.controller');
const {
    esRoleValido,
    emailExiste,
    usuarioExistePorId
} = require('../helpers/db-validators')
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('correo', 'Correo no valido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos

], usuariosPost);
router.put('/:id', [
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(usuarioExistePorId),
    check('rol').custom(esRoleValido),
    validarCampos
], usuarioPut);
router.delete('/:id', [
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(usuarioExistePorId),
    validarCampos
], usuarioDelete);

module.exports = router;