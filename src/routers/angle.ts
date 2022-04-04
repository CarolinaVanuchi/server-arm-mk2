import express from 'express';
import Angle from '../models/angle';
const dao = require('../connect/dao');

const angle = express.Router();


angle.post('/angle', (req, res) => {
    const angle: Angle = req.body;
    try {
        console.log(angle.theta1);
        console.log(angle.theta2);
        console.log(angle.theta3);
        res.status(201).send()
    } catch (error) {
        res.statusMessage = "Error: " + error;
        res.status(500).end();
    }
});

angle.get('/all', async (req, res)  => {
    const resposnse = await dao.getAll();
    res.status(200).send(resposnse);
});

export default angle;