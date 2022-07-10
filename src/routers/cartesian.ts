import express from 'express';
import Cartesian from '../models/cartesian';
const kinematics = require('../controller/kinematics');
const cartesian = express.Router();

cartesian.post('/cartesian', (req, res) => {
    const cartesian: Cartesian = req.body;
    try {

        kinematics.kinematics_calc(cartesian.pointX, cartesian.pointY, cartesian.pointZ);

        res.status(201).send();
    } catch (error) {
        res.statusMessage = "Error: " + error;
        res.status(500).end();
    }
});

export default cartesian;