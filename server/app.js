const express = require('express');
const app = express();
require('dotenv').config({ path: '.env' })
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const cors = require('cors')
const lettingRoute = require('./routes/lettings');

const port = 5000;
// middleware
app.use(cors())
app.use(express.static(__dirname + "public"));
app.use(express.json())

// routes
app.use('/api/v1/lettings', lettingRoute);

app.use(errorHandler)
app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start(); 