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

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/login.html'));
});

app.get('/portafolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/portafolio.html'));
});

app.get('/servicios', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src/views/servicios.html'));
});

app.get('/proceso', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src/views/proceso.html'));
});

app.get('/registro', (req, res) =>{
    res.sendFile(path.join(__dirname, 'src/views/registro.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('Servidor corriendo en el puerto ${3000}')
});