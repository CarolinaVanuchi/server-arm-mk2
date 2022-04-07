const dao = require('../connect/dao');
import Angle from '../models/angle';

exports.getAll = async () => {
    return await dao.getAll();
}

exports.save = async (request: any) => {
    const angle: Angle = request;
    const description: string = request.description;
    const response = await dao.save(angle, description);
    return response;
}

exports.delete = async (request: any) => {
    const id: number = parseInt(request.id_angle);
    await dao.delete(id);
}