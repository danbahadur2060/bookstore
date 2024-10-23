import express from "express"
import dotenv from "dotenv"
import cors from "cors";
// import { corsOrigin } from "./constants/corsOrigin.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({limit:'20mb'}));
app.use(cors())
export {app};