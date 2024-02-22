import express  from 'express';
import  json  from 'body-parser';

export const router = express.Router();

// Declarar primer ruta por omisión

router.get('/', (req,res)=>{
    res.render('index',{titulo:"Mis Practicas JS",nombre:"ing. Jonathan Jesus Aguilar Romero"});
})

router.get('/tabla',(req,res)=>{
    // Paramétros
    const params = {
        numero:req.query.numero
    }
    res.render('tabla',params);
})

router.post('/tabla', (req,res)=>{
    const numero = req.body.numero;
    if(req.body.limpiar){
        res.render('tabla',{ numero:null });
    } else {
        res.render('tabla',{numero});
    }
})

/*router.post('/tabla',(req,res)=>{
    // Paramétros
    const params = {
        numero:req.body.numero
    }
    res.render('tabla',params);
})*/

export default {router}