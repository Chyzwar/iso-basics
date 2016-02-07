

export default class Middleware {
  constructor(path, next) {
    this.path = path || undefined;
    this.next = next;
  }
}

