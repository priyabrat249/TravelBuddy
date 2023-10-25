import express from 'express';

import { createTour, updateTour
    , deleteTour,getSingleTour
    , getAllTour ,getTourBySearch,getFeaturedTour,getTourCount} from  '../controllers/tourController.js';
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js';

const router = express.Router();


//CreateTour
router.post('/',verifyAdmin, createTour);

//UpdateTour
router.put("/:id",verifyUser, updateTour);

//getDeleteTour
router.delete('/:id', verifyAdmin,deleteTour);

//getSingleTour
router.get('/:id', getSingleTour);

//getAllTour
router.get('/', getAllTour);

//getTourBySearch
router.get('/search/getTourBySearch',getTourBySearch);

//getFeaturedTour
router.get('/search/getFeaturedTour', getFeaturedTour);

//getTourCount
router.get('/search/getTourCount', getTourCount);

export default router;
