// load express.js
const express = require('express');
// associe un variable a express librarie 
const app = express();


// cree un serveur
app.listen(3000, () => { console.log('app runing on 3000 port'); });