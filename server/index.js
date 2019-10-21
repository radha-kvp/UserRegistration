// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;

var cors = require('cors')

let appRoutes = require('./routes/route');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://radha:radha123@ds111188.mlab.com:11188/my-react-db', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Use Api routes in the App
app.use('/api', appRoutes)

// Send message for default URL
app.get('/test', (req, res) => res.send('It works'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running API on port " + port);
});