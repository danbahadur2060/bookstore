import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";

export const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    
    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);
    
    // Create new user instance
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashPassword,
    });
    
    // Save user data
    const savedUser = await newUser.save();
    
    if (savedUser) {
      return res.status(201).json({ message: "User Created Successfully" });
    }

    // If save fails
    res.status(500).json({ message: "User could not be created" });
    
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getUser = async (req, res) => {
    try {
      const {email,password} = req.body;
      const user = await User.findOne({email});
      const passwordMatch = bcryptjs.compare(password, User.password);
      if(!passwordMatch || !user){
        res.status(404).json({message:'User could not Found'});
      }
      res.status(200).json({message:'User login success'});
      } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ message: "Server Error" });
      }


};
export const deleteUser = async (req, res) => {};
export const updateUser = async (req, res) => {};
