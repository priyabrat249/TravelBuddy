import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user registration
export const register = async (req, res) => {
    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const user = await User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        }).save();
        

        res.status(200).json({
            token,
            success: true,
            message: "successfully Created",
            data: { ...rest },
            role,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to register" });
        console.log(err);
    }
}


export const login = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: "Incorrect email or password" });
        }

        const { password,role,...rest  } = user._doc;
        
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '15d' }
        );

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
        }).status(200).json({
            token,
            success: true,
            message: 'Successfully logged in',
            data: { ...rest },
            role,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to login" });
        console.error(err);
    }
}
