const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
import express from 'express';
const position = express.Router();
import Angle from '../models/angle';

const port = new SerialPort({
  path: 'COM5',
  baudRate: 115200,
  parity: 'even',
})

exports.write = (theta1: string, theta2: string, theta3: string) => {
  const thetas = JSON.stringify({
    theta1: theta1,
    theta2: theta2,
    theta3: theta3
  });

  port.write(thetas, function (err: { message: any }) {
    if (err) {
      return console.log('Error on write: ', err.message)
    }
  })

  port.on('error', function (err: { message: any }) {
    console.log('Error: ', err.message)
  })
}

position.get('/position', (req, res) => {
  let angle: Angle =
  {
      theta1: 0,
      theta2: 0,
      theta3: 0
  }
  res.json(angle);
  // try {
  //   let parser = port.pipe(new ReadlineParser());
  //   parser.on('data', function (line: string) {
  //     console.log(line);
  //     res.status(201).send("line");
  //   });
  // } catch (error) {
  //   console.log("deu ruim")
  // }

});
export default position;