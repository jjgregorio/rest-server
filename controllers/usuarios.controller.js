
const {response}= require('express');

const usuariosGet=(req,res=response)=>{

    query= req.query;
    return res.json({
        msg:"get API controlador",
        query
    });
}
const usuariosPost=(req,res=response)=>{
    
    const body=req.body;
 
    return res.json({
        msg:"Post API controlador",
        body
    });
}
const usuarioDelete=(req,res=response)=>{
    
    const {id}=req.params;

    return res.json({
        msg:"DELETE API controlador",
        id
    });
}
const usuarioPut=(req,res=response)=>{
    
    const {id}=req.params;

    return res.json({
        msg:"PUT API controlador",
        id
    });
}



module.exports={
    usuariosGet,
    usuariosPost,
    usuarioDelete,
    usuarioPut
    
}