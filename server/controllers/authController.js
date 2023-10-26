import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user registration

export const register = async (req, res) => {
    try {
        const existingUser = await User.findOne({ $or: [{ username: req.body.userName }, { email: req.body.email }] });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Username or email is already in use."
            });
        }
        console.log(existingUser);
        // Hashing password
        const salt = await bcrypt.genSalt(10); // Use await as bcrypt.genSaltSync is asynchronous
        const hash = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            username: req.body.userName,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });

        // Assuming you have a mechanism to generate a token, role, and rest data
        const token = jwt.sign({ userId:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'15d'}); // Replace with your token generation logic
        const role = user.role; // Replace with your role logic
        const rest = {}; // Replace with your additional user data

        res.status(201).json({
            token,
            success: true,
            message: "Successfully Created",
            data: { ...rest },
            role,
        });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ success: false, message: "Failed to register" });
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
