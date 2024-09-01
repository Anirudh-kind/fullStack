import express from "express";
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send('users page')
})

router.get('/register',(req,res)=>{
    res.status(200).send('this is users register endpoint')
})

export default router