const express = require('express');
const app= express();
const port = 3000;
app.get('/',(req,res) => {
    res.send('mi primera app node js');
});
app.get('/welcome',(req,res) => {
    res.send(' desde Beienvenidos');
});

app.listen(port,()=>{
    console.log('servidor corriendo');
});
