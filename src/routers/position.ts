import express from 'express';
import Angle from '../models/angle';
const position = express.Router();
const serial = require('../serial/serial');

position.get('/position', async (req, res) => {
    let theta_values = await serial.read();
    console.log(theta_values);

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