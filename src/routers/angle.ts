import express from 'express';
import Angle from '../models/angle';
const controller_angle = require('../controller/angle');
const controller_step = require('../controller/step');
const uart = require('../uart/uart');
const angle = express.Router();

angle.post('/angle', (req, res) => {
    const angle: Angle = req.body;
    let step1 : number;
    let step2 : number;
    let step3 : number;
    try {
        step1 = controller_step.step(angle.theta1);
        step2 = controller_step.step(angle.theta2);
        step3 = controller_step.step(angle.theta3);
        console.log(step1);
        console.log(step2);
        console.log(step3);
        res.status(201).send()
    } catch (error) {
        res.statusMessage = "Error: " + error;
        res.status(500).end();
    }
});

angle.get('/all', async (req, res)  => {
    uart();
    //const response = await controller_angle.getAll();
    //res.status(201).send(response);
});

angle.post('/save', async (req, res) => {
    const response = await controller_angle.save(req.body);
    res.status(201).send(response);
});

angle.delete('/remove/', async (req, res) => {
    await controller_angle.delete(req.body);
    res.status(201).send('OK');
})
export default angle;