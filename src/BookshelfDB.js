import knex from 'knex';
import bookshelf from 'bookshelf';

class BookshelfDB {
  constructor(config) {
    const { host, user, password, database } = config.connection;
    const { charset='utf8' } = config.connection;

    this.knex = knex({
      client: config.client,
      connection: {
        host,
        user,
        password,
        database,
        charset
      }
    });

    this.bookshelf = bookshelf(this.knex);
  }

  /**
   * Publish DB Connection to global object
   * @param  {String} name
   */
  publishAsGlobal(name = 'bookshelf') {
    global[name] = this.bookshelf;
  }
}

export default BookshelfDB;
