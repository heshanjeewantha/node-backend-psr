const express = require('express');
const app = require('./app');
const cors = require('cors');
const port = 3001;
const host = '0.0.0.0';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://heshanjeewantha:SmJGMx1qDYA592rJ@cluster0.ako96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect=async()=>{
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database');
    }
   
}
connect();

const server =app.listen(port, host ,() => {

    console.log('node server is listning to port 3001');

});

app.use('/api',router);