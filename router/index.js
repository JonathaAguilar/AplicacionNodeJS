import express  from 'express';
import  json  from 'body-parser';
import alumnosoBd from "../models/alumnos.js";


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
 
  let rows;
router.get('/alumnos', async(req,res)=>{

    rows = await alumnosoBd.mostrarTodos();
    res.render('alumnos', {reg:rows});
});

router.post('/alumnos', async(req,res)=>{
    try{
        const params={
            matricula:req.body.matricula,
            nombre:req.body.nombre,
            domicilio:req.body.domicilio,
            sexo:req.body.sexo,
            especialidad:req.body.especialidad
        }

    const resultados = await alumnosoBd.insertar(params);

    }catch(error){
        console.error(error);
        res.status(400).send('sucedio un error:' + error);
    }
    rows = await alumnosoBd.mostrarTodos();
    res.render('alumnos',{ reg: rows });
});



