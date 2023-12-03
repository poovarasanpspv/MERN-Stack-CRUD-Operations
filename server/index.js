const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud',{
        useNewUrlParser:true,
        useUnifiedTopology:true
}).then((con)=>{
        console.log('mongodb is connected to the host');
    });

app.get('/getuser/:id', (req, res, next)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
});

app.put('/updateUser/:id', (req, res, next)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email, age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
});

app.delete('/deleteUser/:id', (req, res, next)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
});

app.get('/', (req, res, next)=>{
    // res.json('server data soon coming')
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
});
app.post('/createUser', (req, res, next)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
});

app.listen(3001, ()=>{
    console.log('server is running');
});
