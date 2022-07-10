import express from 'express';
import Angle from '../models/angle';
const controller_angle = require('../controller/angle');
const serial = require('../serial/serial');
const angle = express.Router();

angle.post('/angle', (req, res) => {
    const angle: Angle = req.body;
    try {
        serial.write(angle.theta1, angle.theta2, angle.theta3);
        res.status(201).send();
    } catch (error) {
        res.statusMessage = "Error: " + error;
        res.status(500).end();
    }
});

angle.get('/all', async (req, res) => {

    const response = await controller_angle.getAll();
    res.status(201).send(response);

});

angle.post('/save', async (req, res) => {
    const response = await controller_angle.save(req.body);
    res.status(201).send(response);
});

angle.delete('/remove/', async (req, res) => {
    await controller_angle.delete(req.body);
    res.status(201).send('OK');
});

export default angle;