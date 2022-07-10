import { create, all } from 'mathjs'
const serial = require('../serial/serial');

const config = {}

exports.kinematics_calc = (xf: number, yf: number, zf: number) => {

    console.log("Kinematics");

    const L1 = 7.6;
    const L2 = 13.5;
    const L3 = 14.6;
    const L4 = 10;

    let t1 = Math.atan(yf/xf)*180/Math.PI;
    let aux = Math.pow(xf,2) + Math.pow(yf,2); 
    let cos_t3 = ( Math.pow(xf, 2) + Math.pow(yf, 2) + Math.pow(zf, 2) + Math.pow(L1, 2) + Math.pow(L4, 2) -2*L1*zf -2*L4*Math.sqrt(aux) -(Math.pow(L2, 2)) -(Math.pow(L3,2)))/(2*L2*L3);

    let t3 = -Math.acos(cos_t3)*180/Math.PI;

    let h2 = Math.sqrt(Math.pow(zf, 2) + Math.pow(L1, 2) - 2 * zf * L1 + Math.pow(xf, 2) + Math.pow(yf, 2) + Math.pow(L4, 2) - 2 * L4 * Math.sqrt(Math.pow(xf, 2) + Math.pow(yf, 2)));
  
    let t2_b = Math.acos((L2+L3*Math.cos(t3*Math.PI/180))/h2);
    
    let t2_c = Math.asin((zf-L1)/h2);
    
    let t2 = (t2_c -Math.sign(t3)*t2_b)*180/Math.PI;

    t2 = t2 - 86.90603759248319;
    t3 = t3 + 99.08588234228499;

    if (t1 < 0) t1 = t1*(-1);
    if (t2 < 0) t2 = t2*(-1);
    if (t3 < 0) t3 = t3*(-1);
    
    console.log(t1);
    console.log(t3);
    console.log(t2);
    serial.write(t1, t3, t2);
    }
