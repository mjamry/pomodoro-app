const initialisationTime = Date.now();

const _getTimestamp = () => {
  var timeFromAppInitialisation = new Date() - initialisationTime;
  var date = new Date(0, 0, 0, 0, 0, 0);
  date.setMilliseconds(timeFromAppInitialisation);

  var ms = date.getMilliseconds();
  var s = date.getSeconds();

  s = s < 10 ? "0" + s : s;
  ms = ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms) : ms;

  return `${date.getHours()}:${date.getMinutes()}:${s}.${ms}`;
};

class ConsoleLog {
  info(message) {
    let msg = `[INFO][${_getTimestamp()}] ${message}`;
    console.log(msg);
  }

  error(message) {
    let msg = `[ERR][${_getTimestamp()}] ${message}`;
    console.error(msg);
  }

  warning(message) {
    let msg = `[WARN][${_getTimestamp()}] ${message}`;
    console.warning(msg);
  }

  debug(message) {
    let msg = `[DBG][${_getTimestamp()}] ${message}`;
    console.debug(msg);
  }
}

//simple container for a specific logger class - for now it is enought
const Log = new ConsoleLog();

export default Log;
