import express from 'express';
import {verifyUser,verifyAdmin} from "../utils/verifyToken.js"
import {createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser} from '../controllers/userController.js'

const router = express.Router();


//CreateUser
router.post('/',createUser);

//UpdateUser
router.put("/:id",updateUser);

//getDeleteUser
router.delete('/:id', deleteUser);

//getSingleUser
router.get('/:id',getSingleUser);

//getAllUser
router.get('/',getAllUser);

export default router;