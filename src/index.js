const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//Import Routes
const taskRoute = require('./routes/task');
const userRoute = require('./routes/user');

dotenv.config();

//Connect Database
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

//Route Middlewares
app.use('/v1/task', taskRoute);
app.use('/v1/user', userRoute);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
