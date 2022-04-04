const db = require("./database");

exports.getAll = async () => {
    const response = await db.query('SELECT * FROM angle');
    return response.rows;
  };