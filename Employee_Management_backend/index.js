import express from "express";
import dotenv from "dotenv";
import pino from "pino";
import mongoose from "mongoose";
import cors from "cors";
import expressSession from "express-session";

const logger = pino();
const app = express();
dotenv.config();

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
);

app.use(express.json());
app.set("trust proxy", 1);

const sessSettings = expressSession({
    path: "/",
    secret: "oursecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
    },
    });
    
    app.use(sessSettings);
    const PORT = process.env.PORT || 5000;
    
    mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    });
    
    const connection = mongoose.connection;
    
    connection.once("open", () => {
    logger.info(" Mongodb connected successfully");
    });
    
    app.get("/", (req, res) => {
    res.status(200).json({ messsage: "Server is running!" });
    });

//routes///
import employeeRoutes from "./routes/employeeRoutes.js"
app.use("/api/employee",employeeRoutes);

    app.listen(PORT, () => {
        logger.info(`Server is running on PORT: ${PORT}`);
        });