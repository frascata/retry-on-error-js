export default class Delay {
  static wait(timeout, value) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), timeout);
    });
  }
}
