import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
import path from "path";


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to db');
}).catch((err) =>{
    console.log(err);
});

const __dirname= path.resolve();

const app=express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=> {
    console.log('server is running on port 3000!')
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
  app.use('/server/user',userRouter);
app.use('/server/auth',authRouter);
app.use("/server/listing",listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});