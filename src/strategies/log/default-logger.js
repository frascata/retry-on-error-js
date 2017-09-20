export default class DefaultLogger {
  static logError(e, {attempts, lastDelayTime, context = {}}) {
    const logObject = Object.assign({},
      {
        attempt: attempts,
        delay: lastDelayTime,
        e
      },
      context
    );
    DefaultLogger.callLogWithFlattenProperties(logObject);
  }

  static callLogWithFlattenProperties(logObject = {}) {
    if (window && window.console) {
      window.console.log('retry', logObject);
    }
  }
}
