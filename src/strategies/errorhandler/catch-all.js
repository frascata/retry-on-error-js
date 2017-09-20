export default class CatchAllErrorHandlerStrategy {
  static create() {
    return new CatchAllErrorHandlerStrategy();
  }

  canCatch() {
    return true;
  }
}
