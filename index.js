const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (request, express, respose) => {

respose.send("Hola mundo!");

})


app.get('*', (request, express, respose) => {

    respose.status(404).send("Lo siento la ruta ingresada no existe !");
    
    })

app.listen(PORT, () =>{
    console.log("Listen in port http://localhost:" + PORT);
});