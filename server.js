const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, 'src/views')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/contacto.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('Servidor corriendo en el puerto ${3000}')
});