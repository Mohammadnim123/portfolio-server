'use strict';
const express = require('express');
const { request, response } = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('Listening on port',PORT);
});

server.use(express.static('./public'));