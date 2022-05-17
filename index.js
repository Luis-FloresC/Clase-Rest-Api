const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.status(200).json({'hola':'mundo'});
    console.log("Hola Mundo");
});

app.listen(3000,()=>{
    console.log("Servidor","iniciado en el puerto 3000...");
});