import express from 'express';
import Angle from '../models/angle';
const controllerAngle = require('../controller/angle');

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
    const response = await controllerAngle.getAll();
    res.status(201).send(response);
});

angle.post('/save', async (req, res) => {
    const response = await controllerAngle.save(req.body);
    res.status(201).send(response);
});

angle.delete('/remove', async (req, res) => {
    await controllerAngle.remove(req.body);
    res.status(201).send('OK');
})
export default angle;