//import npm packages

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const path = require('path');




const app = express();
const PORT = process.env.PORT || 8080;
const Routes = require('./Routes/api')

//connecting mongo

const MONGODB_URI = 'mongodb+srv://umerdogar:allahgreat@firstdb-7gvto.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connectedd!!!');
});


app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Saving  Data for mongo Databases
const data={
    title:'welcome to my youtube channel',
    body:'I help my folks'
};



//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',Routes)



//heruko deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));