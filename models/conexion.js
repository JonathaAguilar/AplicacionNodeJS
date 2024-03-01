import mysql from 'mysql2'

var conexion = mysql.createConnection({
    host: "3.142.67.241",
    user: "root",
    password: "cisco",
    database: "sistemas"
});

conexion.connect((err) => {
    if(err){
        console.log(`Surgio un error ${err}`);
    } else {
        console.log(`Se abrio la conexion con exito`);
    }
});

export default conexion;