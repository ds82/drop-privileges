'use strict';

var logger = function() {};

module.exports = dropTo;

function dropTo(uid, gid) {
  try {
    if (gid) {
      process.setgid(gid);
    }
    process.setuid(uid);
    logger('Dropped privileges, now running as ' + uid + '/' + gid);
  } catch (err) {
    logger('Cannot drop privileges', err);
  }
}

dropTo.setLogger = function(_logger) {
  logger = _logger;
}
