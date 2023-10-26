import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
{
    fullName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    aadharNum: {
        type: String,
        required: true,
        
    },
    phone: {
        type: Number,
        required: true,
        
    },
    guestSize: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
    },  
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    }

    
},
{ timestamps: true }
);

export default mongoose.model("Booking", tourSchema);


