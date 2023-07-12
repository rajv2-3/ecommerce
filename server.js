import express  from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import  bcrypt from "bcrypt";
import cors from "cors";
dotenv.config();
const app=express();
connectDB();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);

//rest api 

app.get("/",(req,res) => {
    res.send({
        message:"welcome to ecommerce app"
    });
});
const PORT=process.env.PORT|| 8080;
app.listen(PORT,()=>{
   console.log(`server running on ${PORT}`);
});