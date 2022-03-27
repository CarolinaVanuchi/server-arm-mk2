import express from 'express';
import Angle from '../models/angle';
const position = express.Router();

position.get('/position', (req, res) => {

    try {
        let angle: Angle =
        {
            theta1: 15,
            theta2: 40,
            theta3: 87841.4
        }
        res.json(angle)
    } catch (error) {
        res.statusMessage = "Error: " + error;
        res.status(500).end();
    }
});

export default position;