var js2xml = require('./js2xml.js');
var JSON5 = require('json5');

module.exports = function (json, options) {
  if (json instanceof Buffer) {
    json = json.toString();
  }
  var js = null;
  if (typeof (json) === 'string') {
    try {
      js = JSON5.parse(json);
    } catch (e) {
      throw new Error('The JSON5 structure is invalid');
    }
  } else {
    js = json;
  }
  return js2xml(js, options);
};
