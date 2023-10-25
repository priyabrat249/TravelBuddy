import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    const newBooking =new Booking({...req.body})
    try {
        const savedBooking = await newBooking.save();

        res.status(200).json({success:true,message:"Booking submitted",data:savedBooking})
    } catch (err){
        res.status(500).json({success:false,message:"failed to submit"})
        
    }
}

export const getBooking = async (req, res) => {
    const id=req.params.id;
    try {
        const booking = await Booking.findById(id);
        // console.log(deletedTour);
        res.status(200).json({
            success: true,
            message: "successfully fetched",
            data: booking,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Not Found" });
        console.log(err);
    }
}

export const getBookingAll = async (req, res) => {
    try {
        const booking = await Booking.find();
        // console.log(deletedTour);
        res.status(200).json({
            success: true,
            message: "successfully fetched All",
            data: booking,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Not Found" });
        console.log(err);
    }
}