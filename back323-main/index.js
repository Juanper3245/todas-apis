import express from 'express';// importar libreria
import cors from 'cors';
//creamos una instancia de la libreria express en la constante app
const app=express();//metodo cosntructor de la libreria 
const PORT=4100;//puesto don de desplegaremos el server

import rutausuario from "./src/modules/usuario/usuario.routes.js";
import rutaproducto from "./src/modules/producto/producto.routes.js";
import rutavehiculo from "./src/modules/vehiculo/vehiculo.routes.js";


// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());
//ruta para los endpoints
app.use("/api", rutausuario);
app.use("/api", rutaproducto);
app.use("/api", rutavehiculo);




//endpoint o recursos de la api  REST
// app.use('/usuario',(req,res)=>{
//     res.send('hola mundo');
// })

//otro endpoint 
// app.use('/usuario/todos',(req,res)=>{
//     res.json([
//       {
//         id: 100,
//         nombre: "lucas",
//         apellido: "perez",
//         estadoActivo: false,
//       },
//       {
//         id: 101,
//         nombre: "pedro",
//         apellido: "ossa",
//         estadoActivo: false,
//       },
//       {
//         id: 102,
//         nombre: "walter",
//         apellido: "araujo",
//         estadoActivo: false,
//       },
//       {
//         id: 103,
//         nombre: "diego",
//         apellido: "murgueito",
//         estadoActivo: false,
//       },
//     ]);
// })

// app.use('/error',(req,res)=>{
//     res.status(400).send({
//         mensaje:"recurso solicitado no existe ",
       
//     });
// });


app.listen(PORT,()=>{
console.log(`Server iniciado en puerto ${PORT}`)
})