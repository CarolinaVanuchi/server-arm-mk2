const db = require("./database");
import Angle from '../models/angle';

exports.getAll = async () => {
  const response = await db.query('SELECT * FROM angle');
  return response.rows;
};

exports.delete = async (id_angle: number) => {
  console.log(id_angle.toString());
  await db.query('DELETE FROM angle where id_angle = $1', [id_angle]);
};

exports.save = async (angle: Angle, description: string) => {
  const { rows } = await db.query(
    'INSERT INTO angle (description, theta1, theta2, theta3) values ($1, $2, $3, $4)',
    [description, angle.theta1, angle.theta2, angle.theta3]
  );
}
