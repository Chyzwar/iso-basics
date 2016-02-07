

export default class Middleware {
  constructor(path, next) {
    this.path = path;
    this.next = next;
  }
}

