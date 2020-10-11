class Logger {
  constructor() {
    this.level = 0;
  }

  padding() {
    if (this.level === 0) return '';

    return Array(this.level * 2).fill(' ').join('');
  }

  section(...args) {
    this.log(...args);
    this.level += 1;
  }

  endSection(...args) {
    this.level -= 1;
    if (this.level < 0) this.level = 0;
    if (args.length > 0) this.log(...args);
  }

  genericLog(logFunction, args) {
    const p = this.padding();

    if (p) {
      logFunction(p, ...args);
    } else {
      logFunction(...args);
    }
  }

  /* Logs */

  log(...args) {
    this.genericLog(console.log, args);
  }

  warn(...args) {
    this.genericLog(console.warn, args);
  }

  error(...args) {
    this.genericLog(console.error, args);
  }
}

module.exports = Logger;
