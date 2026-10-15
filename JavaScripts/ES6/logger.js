/**
 * Logs a message to the console.
 * @param {string} log - The message to log.
 * @param {string} type - The type of log (default is "log").
 */

export const TYPE_LOG = "log";
export const TYPE_WARN = "warn";
export const TYPE_ERROR = "error";

function logger(log, type = "log") {
  console[type](log);
}

export default logger;

// Optional chaining (?.)
