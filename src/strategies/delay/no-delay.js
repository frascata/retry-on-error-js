export default class {
  delay() {
    return Promise.resolve(0);
  }

  get maxTries() {
    return Number.MAX_SAFE_INTEGER;
  }
}
