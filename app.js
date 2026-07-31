import express from 'express';
import "dotenv/config"
const app = express();
const port = process.env.PUERTO || 3000;

app.get("/", (_, res) => {
  res.send("Aprendicez ficha 3407186 SENA");
});

//endpoint
app.get("/ruta1", (req, res) => {
  //template spring
  res.send(`<h1>Usando res.send</h1>`)
})

app.get("/ruta2", (req, res) => {
  res.json({"dev":"node --watch app.js", "script":"node app.js"})
})

app.get("/ruta3/:nombre/:apellido", (req, res) => {
  const nameUsuario = req.params.nombre;
  const apellido = req.params.apellido;
  res.json({"Usuario": nameUsuario, "apellido":apellido})
})
//ruta con parametros de consulta query
app.get("/ruta4", (req, res) => {
  const numero = req.query.phone || 3337238408
  const orden = req.query.orden || "sin orden"
  const pagina = req.query.pagina || 1
  res.send(`<h1>Listado aprendices </h1>
    <h2>El listado en orden ${orden} </h2>
    <p>Pagina: ${pagina}</p>
    <h3>Numero: ${numero}</h3>
    `)
})


//1. Parámetro simple único
app.get("/saludo/:nombre", (req, res) => {
  res.status 
  const nameUsuario = req.params.nombre || "Aprendiz"
  res.send(`<h1>Hola, ${nameUsuario}, bienvenido </h1>
    `)

})

app.listen(port, () => {
  console.log(`Servidor: http://localhost:${port}`);
});