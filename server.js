const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db');

//env config
dotenv.config();

//database connection
connectDB();

//rest check
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/images', express.static('images'));

//routes path and show all routes
app.use('/api/items',require('./routes/itemRoutes'));

// app.get('/test',(req,res) => {
//     res.send(`<h1>Welcome to the ${process.env.PORT}</h1>`);
// });

const PORT = process.env.PORT || 7000;
const port = 7000;
//app listen
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.PORT} and mode on port is ${port}`.bgMagenta.white);
})

