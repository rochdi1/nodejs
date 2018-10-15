// load express.js
const express = require('express');
//
const mongoose = require('mongoose');
// associe un variable a express librarie 
const app = express();

mongoose.connect('mongodb://127.0.0.1/school')
        .then(() => {
            console.log('mongodb is connected...');
        })
        .catch((err) => {
            console.log(err.message);
        })    

//definir le variable courses 
courses = ['Laravel', 'Angular', 'NodeJs', 'VueJs'];

// cree API 
app.get('/api/courses', (req, res) => {
    // envoyer la reponse ce genre un tableau []
    res.send(courses)
});

// cree un serveur
// si un port configure en en .env le serveur prend le env Port si non prend 3000
const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => { console.log(`app runing on ${ PORT } port`); });