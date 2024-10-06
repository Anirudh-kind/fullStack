import express from "express";
const router = express.Router();
import { getAllUser, updateUser, getUser, deleteUser } from '../controllers/userController.js'
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";

// router.get('checkAuthentication', verifyToken, (req, res, next) => {
//   console.log(`verifyToken started`.rainbow)

//   res.send('hello user, you are logedin')
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getAllUser);

export default router