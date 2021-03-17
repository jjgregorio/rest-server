const {Router}= require('express');

const {usuariosGet,usuariosPost,usuarioDelete,usuarioPut}=require('../controllers/usuarios.controller');

const router=Router();

router.get('/',usuariosGet);
router.post('/',usuariosPost);
router.put('/:id',usuarioPut);
router.delete('/:id',usuarioDelete);

module.exports=router;