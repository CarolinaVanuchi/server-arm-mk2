import express from 'express';
import { create, all } from 'mathjs'

const config = {}
const mathjs = create(all, config)
const kinematics = express.Router();


kinematics.get('/kinematics', (req, res) => {
    const l1 = 0.076;
    const l2 = 0.135;
    const l3 = 0.146;
    const l4 = 0.07;
    
    let aux1: number;
    let t3_aux = [];
    let t2 = [];
    let t4 = [];

    const xf = 0.02;
    const yf = 0.15;
    const zf = 0.3;

    let t1_ = (Math.atan2(yf, xf) * 180) / Math.PI;
    let t1 = [t1_, t1_];
    aux1 = (Math.pow(xf, 2) + Math.pow(yf, 2));

    let cos_t3 = (Math.pow(xf, 2) + Math.pow(yf, 2) + Math.pow(zf, 2) + Math.pow(l1, 2) + Math.pow(l4, 2) - (2 * l1 * zf) - (2 * l4 * Math.sqrt(aux1)) - Math.pow(l2, 2) - Math.pow(l3, 2)) / (2 * l2 * l3);
    let cos_t3_ = mathjs.acos(cos_t3);
    let t3 = [(cos_t3_ * 180) / Math.PI, (-cos_t3_ * 180) / Math.PI];

    let h2 = Math.sqrt(Math.pow(zf, 2) + Math.pow(l1, 2) - 2 * zf * l1 +
        Math.pow(xf, 2) + Math.pow(yf, 2) + Math.pow(l4, 2) - 2 * l4 * Math.sqrt(Math.pow(xf, 2) + Math.pow(yf, 2)));

    let t2_b = Math.acos((l2 + l3 * Math.cos(t3[1] * Math.PI / 180)) / h2);

    let t2_c = Math.asin((zf - l1) / h2);
    

    for (let i = 0; i < t3.length; i++) {
        if (t3[i] > 0)
            t3_aux[i] = 1;
        else if (t3[i] == 0) {
            t3_aux[i] = 0;
        }
        else if (t3[i] < 0) {
            t3_aux[i] = -1;
        }
    }

    for (let i = 0; i < t3_aux.length; i++) {
        t2[i] = (t2_c - t3_aux[i]*t2_b)*180/Math.PI; 
    }

    for (let i = 0; i < t3_aux.length; i++) {
        t4[i] = -(t2[i]+t3[i]); 
    }

    console.log(t1);
    console.log(t2);
    console.log(t3);
    console.log(t4);
    
    res.json("teste");
});

export default kinematics;