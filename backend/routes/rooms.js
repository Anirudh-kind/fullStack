import express from "express";
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send('rooms page')
})

router.get('/register',(req,res)=>{
    res.status(200).send('this is rooms register endpoint')
})

export default router