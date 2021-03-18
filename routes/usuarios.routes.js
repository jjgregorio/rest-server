const {Router}= require('express');
const { check } = require('express-validator');

const {usuariosGet,usuariosPost,usuarioDelete,usuarioPut}=require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router=Router();

router.get('/',usuariosGet);
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe tener al menos 6 caracteres').isLength({min:6}),
    check('correo','Correo no valido').isEmail(),
    check('rol','No es un ROL valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
   
],usuariosPost);
router.put('/:id',usuarioPut);
router.delete('/:id',usuarioDelete);

module.exports=router;