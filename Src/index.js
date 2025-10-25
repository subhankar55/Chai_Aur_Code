import mongoose, { Mongoose } from "mongoose";
import { DB_NAME } from "./constant";
import express from "express"

const app = express()
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERRR:")
        })
    }catch (error){
            console.error("ERROR: ", error);
            throw err
        }
    }
)()