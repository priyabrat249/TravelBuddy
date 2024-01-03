import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
    credentials:true
}
//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://121cs0249:0pU2IJx5Ki2iyQ3O@travelbuddy.pwd5f3s.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB database connection established');
    } catch (err) {
        console.log(err);
    }
}

app.get('/', (req, res) => {
    res.send("api is working")
})
//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

app.listen(port, () => {
    connect();
    console.log('server running on port ' + port);
});