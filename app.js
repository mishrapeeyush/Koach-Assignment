const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port=8080;

const app = express();


//routes
const employeeRoute = require('./routes/employeeRoutes')

//middleware
app.use(bodyParser.json());

app.use("/api/employee", employeeRoute);

//const mongoose = require('mongoose')
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/employeeDirectory', 
{   useNewUrlParser: true, 
    useUnifiedTopology: true
 })
    .then(() => console.log('Connected '))
    .catch(err => console.error(err));




app.listen(port, () => console.log(`connected to the port ${port}`));
