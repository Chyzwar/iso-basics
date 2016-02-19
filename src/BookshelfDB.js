import knex from 'knex';
import bookshelf from 'bookshelf';

class BookshelfDB {
  constructor(config) {
    const { host, user, password, database } = config.connection;
    const { charset = 'utf8' } = config.connection;
    const { min = 2, max = 10 } = config.pool;
    const { tableName } = config.migrations;

    this.knex = knex({
      client: config.client,
      connection: {
        host,
        user,
        password,
        database,
        charset,
      },
      pool: {
        min,
        max,
      },
      migrations: {
        tableName,
      },
    });

    this.bookshelf = bookshelf(this.knex);
  }

  /**
   * Load Bookshelf Plugin
   * @param  {string} pluginName
   */
  loadPlugin(pluginName){
    this.bookshelf.plugin(pluginName);
  }
}

export default BookshelfDB;
