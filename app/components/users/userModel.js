const { SMALLINT, STRING } = require("sequelize");
const sequelize = require("../../config/mariadb");

const User = sequelize.define('User',{
  id: {type: SMALLINT, primaryKey: true, autoIncrement: true },
  username: STRING,
  password: STRING,
  rol: STRING 
});

module.exports = User;


