import { Router } from "express";

import userService from "../service/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;
    
    try {
        // Attempt to register the user
        const { user, token } = await userService.register(userData);

        // If registration is successful, send the user and token in the response
        res.json({
            _id: user.id,
            accessToken: token,
            email: user.email,
        });
    } catch (error) {
        // If an error occurs (e.g., email already in use), send a 400 status and the error message
        console.error('Registration error:', error.message); // Optionally log the error for debugging
        res.status(400).json({ message: error.message });
    }
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const { user, token } = await userService.login(email, password)

    res.json({
        _id: user.id,
        accessToken: token,
        email: user.email,
    });
});

userController.get('/logout', async (req, res) => {
    const token = req.headers['x-authorization'];

    await userService.invalidateToken(token);

    res.json({});
});

export default userController;
