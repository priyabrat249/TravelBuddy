import express from 'express';
import {verifyUser,verifyAdmin} from "../utils/verifyToken.js"
import {createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser} from '../controllers/userController.js'

const router = express.Router();


//CreateUser
router.post('/', verifyUser,createUser);

//UpdateUser
router.put("/:id", verifyUser,updateUser);

//getDeleteUser
router.delete('/:id',verifyUser, deleteUser);

//getSingleUser
router.get('/:id',verifyUser,getSingleUser);

//getAllUser
router.get('/',verifyAdmin,getAllUser);

export default router;