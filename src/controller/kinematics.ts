import express from 'express';
import { create, all } from 'mathjs'

const config = { }
const mathjs = create(all, config)
const kinematics = express.Router();


kinematics.get('/kinematics', (req, res) => {
    let aux1: number;
    let aux2: number;
    let aux3: number;
    let sum_values: number;

    const xf = 0.02;
    const yf = 0.15;
    const zf = 0.3;

    const l1 = 0.076;
    const l2 = 0.135;
    const l3 = 0.146;
    const l4 = 0.07;
        
    let t1_ = (Math.atan2(yf, xf)*180)/Math.PI; //t1 = atan(yf/xf)*180/pi;
    let t1 = [t1_, t1_]; //[t1 t1];
    aux1 = (Math.pow(xf, 2) + Math.pow(yf, 2)); //xf^2 +yf^2
    
    let cos_t3 = (Math.pow(xf, 2) + Math.pow(yf, 2) + Math.pow(zf, 2) + Math.pow(l1, 2) + Math.pow(l4, 2) - (2*l1*zf) - (2*l4*Math.sqrt(aux1)) - Math.pow(l2, 2) - Math.pow(l3, 2)) / (2*l2*l3); //(xf^2 +yf^2 +zf^2 +L1^2 +L4^2 -2*L1*zf -2*L4*sqrt(xf^2 +yf^2) -(L2^2) -(L3^2))/(2*L2*L3);
    // ATÉ AQUI OKAY

    let cost_t3_ = mathjs.acos(cos_t3);
    
    let t3 = [cost_t3_, -cost_t3_];


    //let t3 = mathjs.matrix([aux1, aux1]);
    
    console.log(cos_t3);
    console.log(cost_t3_);
    res.json("teste");
});

export default kinematics;
// exports.kinematics = (xf: number, yf: number, zf: number) => {

//    const l1 = 1;
//    const l2 = 1;
//    const l3 = 0.5;
//    const l4 = 0.5;

//    let t1 = Math.atan(yf/xf);
  


// }