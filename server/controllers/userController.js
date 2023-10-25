import User from '../models/User.js';
//createUser
export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    
    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(200).json({
            success: true,
            message: "successfully saved",
            data: savedUser,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to create.Try again" });
        console.log(err);
    }
}

//UpdateUser
export const updateUser = async (req, res) => {

    const id = req.params.id;
    console.log(id);
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        console.log(updatedUser);
        res.status(200).json({
            success: true,
            message: "successfully Updated",
            data: updatedUser,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to Update.Try again" });
        console.log(err);
    }
}

//DeleteUser
export const deleteUser = async (req, res) => {
    const id=req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        console.log(deletedUser);
        res.status(200).json({
            success: true,
            message: "successfully deleted",
            data: deletedUser,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to Delete.Try again" });
        console.log(err);
    }
}

//getSingleUser
export const getSingleUser = async (req, res) => {
    const id=req.params.id;
    try {
        const user = await User.findById(id);
        // console.log(deletedUser);
        res.status(200).json({
            success: true,
            message: "successfully fetched",
            data: user,
        });
    } catch (err) { 
        res.status(500).json({ succcess: false, message: "Failed to fetch.Try again" });
        console.log(err);
    }
}

//getAllUser
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({});
        // const Users = await User.find({})

        res.status(200).json({
            success: true,
            message: "Successfully fetched all",
            data: users, // Changed 'User' to 'Users'
        });
    } catch (err) { 
        res.status(500).json({ success: false, message: "Failed to fetch all. Try again" });
        console.log(err);
    }
}