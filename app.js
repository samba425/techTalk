const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys')
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('./config/passport')(passport);

//routes
const auth = require('./routes/auth');


//mongose connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,{
    useMongoClient: true
})
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

const app = express();

app.get('/',(req,res) => {
    res.send("helo ....")
});

app.use(cookieParser());
app.use(session({
    secret: 'sambasiva425',
    resave: false,
    saveUninitialized: false
}))
//passport middle

app.use(passport.initialize());
app.use(passport.session());

// global variable
app.use((req,res,next) => {
    res.locals.user = req.user || null;
    next();
})
// Routes  
app.use('/auth',auth);

 
const port = process.env.PORT || 5000; 
app.listen(port,()=> {
    console.log(`server started on port ${port}`);
})