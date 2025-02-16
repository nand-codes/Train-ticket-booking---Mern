import express from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'

const router=express.Router()

router.post('/register',async(req,res)=>{
    try{
        const {username,email,password}=req.body;

        const exist=await User.findOne({email});
        if (exist){
            return res.status(400).json({message:'user already exist'});
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);


        const newUser=new User({username,email,password:hashedPassword});
        newUser.save();
        console.log(newUser)

        const token=jwt.sign({id:newUser.id},process.env.JWT_SECRET,{expiresIn:'1d'});


        res.status(200).json({message:'user registered successfully',token})


    }
    catch(error){
        res.status(500).json({message:'server error',error})
    }
})

export default router;