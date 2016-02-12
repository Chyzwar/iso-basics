import Sequelize from 'sequelize';
import process from 'process';
import path from 'path';
import fs from 'fs';

class SequelizeDB {
  constructor(config) {
    this.config = config;
    this.connection = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        dialect: 'mariadb',

        pool: {
          max: config.pool.max || 5,
          min: config.pool.max || 0,
          idle: config.pool.idle || 1000,
        },
      });
  }

  /**
   * Publish DB Connection to global object
   * @param  {String} name
   */
  publishAsGlobal(name = 'seq') {
    global[name] = this.connection;
  }

  /**
   * Relative path to model dir
   * @param  {String} modelsDir
   */
  importModels(modelsDir) {
    const srcPath = path.join(process.cwd(), './src');
    const searchDir = path.join(srcPath, modelsDir);

    fs.readdirSync(searchDir)
      .forEach((file) => {
        this.connection.import(path.join(searchDir, file));
      });
  }
}

export default SequelizeDB;
