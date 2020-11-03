const { response } = require('express');
const express = require ('express')
const app = express();

app.get('/teste',(resquest, response)=>{
    return response.jason({ message:'hello woord'})
})

app.listen(3333)