import User from "../model/userSchema.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    const { email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ email, password: hashedPassword });


    try {
        await newUser.save();
        res.status(201).json({
            message: "User created successfully"
        });
    } catch (error) {
        next(error);
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body; // Ensure email and password are extracted from the request body

    try {
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return res.status(401).json({
                message: "Wrong password"
            });
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('access_token', token).json({
            message: "Sign in successfully",
            token,
            success: true
        });
    } catch (error) {
        next(error);
    }
};