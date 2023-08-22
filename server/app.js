const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes')
const cors = require('cors')
const app = express();

const Db ='mongodb+srv://soumyamohanty540:YDHn7F4QN92bRYWH@cluster0.e95aymg.mongodb.net/attendance_system?retryWrites=true&w=majority'



mongoose.connect(Db).then(()=>{
    // seedData()
    console.log("Database connected")
}).catch((error)=>
    console.log("no connection",error)
);
app.use(express.json());

app.use(cors());

app.use(router)



app.listen(5000,"0.0.0.0",()=>{
    console.log("this app is running on prot 5000")
    });