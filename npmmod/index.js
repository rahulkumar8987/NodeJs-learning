const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require("http");
const { stringify } = require('querystring');

 const server = http.createServer((req,res) => {
    
    if(req.url == "/") {
        res.end("Welcome to my world");
    } else if (req.url== "/about") {
        res.end("welcome to about page"); 

        } else if (req.url== "/contact") {
        res.end("welcome to contact page");
    } else {
        res.writeHead(404);
    }{
        res.end("<h1> 404!Page not Found !</h1>");
    }
 })
mongoose.connect('mongodb://localhost:27017/codeinverseDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })
server.listen(3000, () => {
    console.log('Connected to PORT Mongo...');
})

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Boolean,
    author: String,
    active: Boolean,

    date: {
        type:Date,
        defaulr: Date.now
    }
   // coolection creation
 