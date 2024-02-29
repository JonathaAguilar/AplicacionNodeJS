import express  from 'express';
import  json  from 'body-parser';

export const router = express.Router();
export default {router}
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

router.post('/tabla',(req,res)=>{
    // Paramétros
    const params = {
        numero:req.body.numero
    }
    res.render('tabla',params);
})

router.get("/cotizacion", (req, res) => {
    const params = {
      valor: req.query.valor,
      pInicial: req.query.pInicial,
      plazos: req.query.plazos,
    };
    res.render("cotizacion", params);
  });
  
  router.post("/cotizacion", (req, res) => {
    const params = {
      valor: req.body.valor,
      pInicial: req.body.pInicial,
      plazos: req.body.plazos,
    };
    res.render("cotizacion", params);
  });
  




