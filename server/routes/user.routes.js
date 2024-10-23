import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/user.controllers.js';
const route = express.Router();
 
route.post('/createUser',createUser);
route.get('/getUser',getUser);
route.delete('/deleteUser',deleteUser);
route.put('/updateUser',updateUser);

export {route};