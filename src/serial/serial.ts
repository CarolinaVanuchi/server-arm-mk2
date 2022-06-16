const { SerialPort } = require('serialport')

const port = new SerialPort({
  path: 'COM5',
  baudRate: 115200,
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
    console.log(thetas);
  })

  port.on('error', function (err: { message: any }) {
    console.log('Error: ', err.message)
  })
}
