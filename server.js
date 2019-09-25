const express = require('express');
const app = express();
// importar las rutas de las plantas
const plantsApi = require('./routes/plantRoute');

// enviar la app de express a las rutas de las plantas
plantsApi(app);

app.get('/', (req,res) => {
    res.send('hello hello');
});

app.listen(5700, () => {
    console.log(`Escuchando por http://localhost:5700`);
});

