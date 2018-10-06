// load express.js
const express = require('express');
// associe un variable a express librarie 
const app = express();


// cree un serveur
// si un port configure en en .env le serveur prend le env Port si non prend 3000
const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => { console.log(`app runing on ${ PORT } port`); });