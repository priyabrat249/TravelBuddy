import express from 'express';
import { createBooking,getBooking,getBookingAll} from '../controllers/bookingControllers.js';
import { verifyUser,verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/', createBooking);

//getBooking
router.get('/:id',getBooking);

//getBookingAll
router.get('/',getBookingAll);

export default router;