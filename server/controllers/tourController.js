import Tour from '../models/Tour.js';

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    
    try {
        const savedTour = await newTour.save();
        console.log(savedTour);
        res.status(200).json({
            success: true,
            message: "successfully saved",
            data: savedTour,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to create.Try again" });
        console.log(err);
    }
}

//UpdateTour
export const updateTour = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        console.log(updatedTour);
        res.status(200).json({
            success: true,
            message: "successfully Updated",
            data: updatedTour,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to Update.Try again" });
        console.log(err);
    }
}

//DeleteTour
export const deleteTour = async (req, res) => {
    const id=req.params.id;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id);
        console.log(deletedTour);
        res.status(200).json({
            success: true,
            message: "successfully deleted",
            data: deletedTour,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to Delete.Try again" });
        console.log(err);
    }
}

//getSingleTour
export const getSingleTour = async (req, res) => {
    const id=req.params.id;
    try {
        const tour = await Tour.findById(id).populate('reviews');
        // console.log(deletedTour);
        res.status(200).json({
            success: true,
            message: "successfully fetched",
            data: tour,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to fetch.Try again" });
        console.log(err);
    }
}

//getAllTour
export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);
        // const tours = await Tour.find({})

        res.status(200).json({
            success: true,
            count: tours.length, // Changed 'tours ?' to 'tours.length'
            message: "Successfully fetched all",
            data: tours, // Changed 'tour' to 'tours'
        });
    } catch (err) { 
        res.status(500).json({ success: false, message: "Failed to fetch all. Try again" });
        console.log(err);
    }
}

export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance); // Convert to an integer
    const maxGroupSize = parseInt(req.query.maxGroupSize); // Convert to an integer

    try {
        const tours = await Tour.find({
            city,
            distance: { $gte: distance }, // Use $gte for numerical comparison
            maxGroupSize: { $gte: maxGroupSize } // Use $gte for numerical comparison
        }).populate('reviews');

        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully fetched matching tours",
            data: tours
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch matching tours. Try again"
        });
        console.log(err);
    }
}

export const getFeaturedTour = async (req, res) => {
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);
        // const tours = await Tour.find({})

        res.status(200).json({
            success: true,
            count: tours.length, // Changed 'tours ?' to 'tours.length'
            message: "Successfully fetched all",
            data: tours, // Changed 'tour' to 'tours'
        });
    } catch (err) { 
        res.status(500).json({ success: false, message: "Failed to fetch all. Try again" });
        console.log(err);
    }
}

export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({
            success: true,
            
            data: tourCount, // Changed 'tour' to 'tours'
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch all. Try again" });
        console.log(err);
    }
}