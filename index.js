const { response } = require('express');
const express = require ('express')
const app = express();

app.get('/teste',(resquest, response)=>{
    return response.jason({ message:'hello woord 2'})
})

app.listen(3333)