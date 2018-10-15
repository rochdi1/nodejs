
// load express.js
const express = require('express');
//
const mongoose = require('mongoose');
//
const Joi = require('joi');
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
app.get('/api/courses', async (req, res) => {

    const courses = await Course.find();

    // envoyer la reponse ce genre un tableau []
    res.send(courses)
});


app.put('/api/courses/:id', async (req, res) => {

    // on recuper le id
    const id = req.params.id;

    // on recuper les donne dans la base de donne
    const course = await Course.findById(id);

    // om mes les modefication des donnes
    course.name = req.body.name,
    course.author = req.body.author,
    course.price = req.body.price

    // la persistance
    const courso = await course.save();

     // envoyer la reponse ce genre un tableau []
     res.send(courso)

});


app.delete('/api/courses/:idCourse', async (req, res) => {

    // on recuper le id
    const id = req.params.idCourse;

    // on recuper la donne dans la base de donne
    const course = await Course.findOne({_id: id});



    // la persistance
    const result = await course.delete();

     // envoyer reponse ce genre un tableau []
     res.send(result)

});



app.post('/api/course', async (req, res) => {

    const courseValidate = {
        name: Joi.string().min(3).required(),
        author: Joi.string().required(),
        price: Joi.number().required(),
    }

   resu = Joi.validate(req.body, courseValidate);
   if(resu.error) {
       return res.status(400).send(resu.error.details[0].message);
   }
  return res.send(resu);

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
