import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../../db.json')[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);

export {
  sequelize,
};
