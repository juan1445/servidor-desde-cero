const express = require('express');
const app = express();

const { config } = require('./config/index');
// importar las rutas de las plantas
const plantsApi = require('./routes/plantRoute');

//body-parser
app.use(express.json());

// enviar la app de express a las rutas de las plantas
plantsApi(app);

app.get('/', (req,res) => {
    res.send('hello hello');
});

app.listen(config.port, () => {
    console.log(`Escuchando por http://localhost:5700`);
});

