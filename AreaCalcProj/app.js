const express= require('express');
const app= express();
const bodyParser = require('body-parser');

    
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+"/allFiles/home.html");
    });


    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    // This is Circle Area work
    app.get('/circle',(req,res)=>{
        res.sendFile(__dirname+"/allFiles/circle.html");
    });

    app.post('/circle',(req,res)=>{

        const radiusNum=req.body.cercleRadius;
        const pie=3.1416;
        res.send(`<h1 style="text-align:center;font-weight: 700;font-family:monospace;color:  rgb(183, 255, 0); 
        background:black; padding:1rem 2rem; font-style: italic;">The circle area num is  :: ${pie*(radiusNum)**2}</h1>`);

    });


    // This is Tringle Area work

    app.get('/tringle',(req,res)=>{
        res.sendFile(__dirname+"/allFiles/tringle.html");
    });


    app.post('/tringle',(req,res)=>{

        const base=req.body.base;
        const height=req.body.height;
        res.send(`<h1 style="text-align:center;font-weight: 700;font-family:monospace;color:  rgb(183, 255, 0); 
        background:black; padding:1rem 2rem; font-style: italic;">The Tringle area number is  :: ${0.5*base*height}</h1>`);

    });

module.exports=app;