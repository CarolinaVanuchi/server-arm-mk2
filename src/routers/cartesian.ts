import express from 'express';
import Cartesian from '../models/cartesian';

const cartesian = express.Router();

cartesian.post('/cartesian', (req, res) => {
    const cartesian: Cartesian = req.body;
    try {
        console.log(cartesian.pointX);
        console.log(cartesian.pointY);
        console.log(cartesian.pointZ);
        res.status(201).send()
    } catch (error) {
        res.statusMessage = "Error: " + error;
        res.status(500).end();
    }
});

export default cartesian;