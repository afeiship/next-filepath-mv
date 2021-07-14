(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var path = require('path');

  nx.filepathMv = function (inFilepath, inCallback) {
    var obj = path.parse(inFilepath);
    var { base, ...customized } = nx.mix(obj, { prefix: '', suffix: '' });
    var { prefix, suffix, name, ...normalized } = inCallback(customized);
    normalized.name = prefix + name + suffix;
    return path.format(normalized);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.filepathMv;
  }
})();
