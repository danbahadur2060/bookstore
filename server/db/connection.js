import mongoose from "mongoose";
import { db_name } from "../constants/db_name.js";
const DB_URI = process.env.MONGO_URI;
 export const Db_connection = async()=>{
    await mongoose.connect(`${DB_URI}/${db_name}`).then(()=>{
        console.log(`Connection Success`);
    }).catch((error)=>{
        console.log(`Connection ERROR: ${error}`);
    })
 }