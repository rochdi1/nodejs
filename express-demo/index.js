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



// creation de schema
const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

// creation de model
const Course = mongoose.model('Course', courseSchema);


// Middlware pour que le restapi peuve lire les donnes json 
app.use(express.json())



//definir le variable courses 
courses = ['Laravel', 'Angular', 'NodeJs', 'VueJs'];

// cree API 
app.get('/api/courses', (req, res) => {
    // envoyer la reponse ce genre un tableau []
    res.send(courses)
});


app.post('/api/course', async (req, res) => {
    // donner les informations au model
    const course = new Course({
        name: req.body.name,
        author: req.body.author,
        price: req.body.price
    });
    // persister ce objet dans la base de donne
    const newCourse = await course.save();

    res.send(newCourse)
   
});

// cree un serveur
// si un port configure en en .env le serveur prend le env Port si non prend 3000
const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => { console.log(`app runing on ${ PORT } port`); });