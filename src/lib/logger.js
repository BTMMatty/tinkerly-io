export class Logger {
  constructor({ env }) {
    this.env = env;
  }

  error(message, meta = {}) {
    if (this.env === 'production') {
      console.error(`[ERROR] ${message}`, JSON.stringify(meta));
    } else {
      console.error(`[ERROR] ${message}`, meta);
    }
  }
}