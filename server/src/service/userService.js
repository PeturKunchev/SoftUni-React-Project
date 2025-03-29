import bcrypt from 'bcrypt';

import User from "../models/User.js"
import { generateToken } from '../utils/tokenUtils.js';
import InvalidToken from '../models/InvalidToken.js';
import mongoose from 'mongoose';

export default {
    async register(userData) {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('Email is already in use!');
        }
        const user = await User.create(userData)

        const token = generateToken(user);

        return { user, token };
    },
    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Email or password are incorrect!');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Email or password are incorrect!');
        }

        const token = generateToken(user);

        return { user, token };
    },
    invalidateToken(token) {
        return InvalidToken.create({token});
    },
    async addToFavourites(userId,bookId){
        const user = await User.findById(userId);
        user.favourites.push(bookId);
        await user.save();
        return user;
    },
    async removeFromFavourites(userId,bookId){
        const user = await User.findById(userId);
        user.favourites = user.favourites.filter(id => id.toString() !== bookId);
        await user.save();
        return user;
    },
    async getFavourites(userId){
        
        const user = await User.findById(userId).populate('favourites'); 
        
        return user.favourites;
    }
}
