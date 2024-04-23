require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require('./dbConnection');
const projectRouter = require('./routers/projectRouter');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5500;

app.use((req, res, next) => {
    if (dbConnection.getCollection()) {
        next();  // If collection is available, proceed to next middleware or route handler
    } else {
        res.status(500).json({ message: 'Error connecting to DB' });  // Send error response if collection is not available
    }
});

// Use the router
app.use('/api/project', projectRouter);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
