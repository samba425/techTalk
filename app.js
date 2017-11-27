const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');


require('./config/passport')(passport);

//routes
const auth = require('./routes/auth');

const app = express();

app.get('/',(req,res) => {
    res.send("helo ....")
})

// Routes 

app.use('/auth',auth);

const port = process.env.PORT || 5000; 
app.listen(port,()=> {
    console.log(`server started on port ${port}`);
})