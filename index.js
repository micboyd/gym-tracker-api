import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';

import userAuthenticationRoute from './routes/userAuthenticationRoute.js';

import workoutTemplateRoute from './routes/strength/workoutTemplateRoute.js';
import workoutInstanceRoute from './routes/strength/workoutInstanceRoute.js';
import cardioInstanceRoute from "./routes/cardio/cardioInstanceRoute.js";

const app = express();

dotenv.config();

// Headers
app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];

    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

// Parser
app.use(express.json());

// Database
const uri = process.env.DB_CONNECT;

mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(x => {
    console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
}).catch(err => {
    console.error("Error connecting to mongo", err);
});

// Authentication Endpoints
app.use('/api/authentication', userAuthenticationRoute);

// Strength Endpoints
app.use('/api/workoutTemplate', workoutTemplateRoute);
app.use('/api/workoutInstance', workoutInstanceRoute);

// Cardio Endpoints
app.use('/api/cardioInstance', cardioInstanceRoute);

// Server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});