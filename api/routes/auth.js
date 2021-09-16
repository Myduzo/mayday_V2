import express from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
//import { modelNames } from "mongoose";

export const router = express.Router();
/*
//SIGN UP
router.post("/signup", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      //phoneNumber: req.body.phoneNumber,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user){
      res.status(404).json("user not found");
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword){
      res.status(400).json("wrong password");
      return;
    }

    res.status(200).json(user);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  try{
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    }); 

    const user = await newUser.save();
      res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});
