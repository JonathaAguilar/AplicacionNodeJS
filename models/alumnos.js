import { resolve } from "path";
import conexion from "./conexion.js";
import { rejects } from "assert";

var alumnosoBd = {}
alumnosoBd.insertar = function insertar(alumno) {

    return new Promise((resolve, reject) => {

        //Consulta
        let sqlConsulta = `Insert into alumnos set ?`;
        conexion.query(sqlConsulta, alumno, function(err, res) {

        if(err) {
            console.log(`Surgio un error`, err.message);
            rejects(err);
        } else {
            const alumno = {
                id: res.id,

            }

            resolve(alumno);
        }
        });
    }); 
}

alumnosoBd.mostrarTodos = function mostrarTodos(){
    return new Promise ((resolve,rejects)=>{
        let sqlConsulta = "select * from alumnos"
       conexion.query(sqlConsulta,null,function(err,res){
            if(err){
                console.log("surgio un error", err);
                rejects(err);
            }
            else{
                resolve(res);
            }
        });
    });
}

export default alumnosoBd; 