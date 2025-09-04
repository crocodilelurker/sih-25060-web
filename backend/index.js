const express = require('express')
const dotenv = require('dotenv')
const ragRoute = require('./routes/ragRoute.js')
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/rag',ragRoute)

app.listen(8000,()=>{
    console.log("Server Running on Port 8000")
})