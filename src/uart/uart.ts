import { init } from 'raspi';
import { Serial } from 'raspi-serial';

const pins:any = [];
pins.push('TXD0', 'RXD0');

exports.uart = () => {
  let serial = new Serial({portId: pins});
  serial.open(() => {
    serial.on('data', (data: any) => {
      process.stdout.write(data);
    });
    serial.write('Hello from raspi-serial');
  });
}
