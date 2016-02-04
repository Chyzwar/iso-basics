import Sequelize from 'sequelize';
import process from 'process';
import path from 'path';
import fs from 'fs';


export default class MariaDB {
  constructor(config) {
    this.config = config;
    this.connection = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        dialect: 'mariadb',

        pool:{
          max: config.pool.max || 5,
          min: config.pool.max || 0,
          idle: config.pool.idle || 1000
        }
      });
  }

  /**
   * Publish DB Connection to global object
   * @param  {String} name
   */
  publishGlobal(name='maria') {
    global[name] = this.connection;
  }

  /**
   * Relative path to model dir
   * @param  {String} modelsDir
   */
  importModels(modelsDir){
    let srcPath = path.join(process.cwd(), './src');
    let searchDir = path.join(srcPath, modelsDir);
    console.log(searchDir);
    fs.readdirSync(searchDir)
      .forEach((file) => {
        this.connection.import(path.join(searchDir, file));
      });
  }
}
