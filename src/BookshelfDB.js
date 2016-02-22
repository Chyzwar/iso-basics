import knex from 'knex';
import bookshelf from 'bookshelf';

class BookshelfDB {
  constructor(config) {
    this.knex = knex(config);
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
