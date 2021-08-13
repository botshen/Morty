// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*::before {\n    box-sizing: border-box\n}\n\n*::after {\n    box-sizing: border-box\n}\n\nbody {\n    background: #d5f1da;\n    min-height: 100vh;\n}\n.frame {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 1000px;\n    height: 500px;\n    background: #d5f1da;\n    overflow: hidden;\n}\n/*\n * Morty \u7684\u5927\u5934\n */\n.head {\n    width: 335px;\n    height: 335px;\n    border-radius: 50% 50% 45% 45%;\n    border: 1px solid #666;\n    background: #fed8b1;\n    position: absolute;\n    transform: translate(180px, 100px);\n    box-shadow: 0 -50px 0 10px #935613, 0 -50px 0 11px #666;\n}\n/*\n * \u4E24\u53EA\u65E0\u795E\u7684\u773C\u775B\n */\n.head .eye1,\n.head .eye2 {\n    position: absolute;\n    top: 78px;\n    width: 122px;\n    height: 120px;\n    border: 1px solid #666;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: inset 0 0 0 55px #fff, inset 0 0 0 70px #666;\n}\n.head .eye1:after, .head .eye1:before,\n.head .eye2:after,\n.head .eye2:before {\n    position: absolute;\n    display: block;\n    content: \"\";\n}\n.head .eye1 {\n    left: 32px;\n    border-radius: 50% 50% 45% 45%;\n}\n.head .eye1:before {\n    width: 70px;\n    height: 40px;\n    transform: rotate(-25deg);\n    border-radius: 50%;\n    top: -25px;\n    left: 10px;\n    border-top: 1px solid rgba(0, 0, 0, 0.7);\n    z-index: -1;\n}\n.head .eye1:after {\n    width: 70px;\n    height: 40px;\n    transform: rotate(30deg);\n    border-radius: 50%;\n    bottom: -5px;\n    left: -10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.7);\n    z-index: -1;\n}\n.head .eye2 {\n    left: 182px;\n    border-radius: 50% 50% 48% 45%;\n}\n.head .eye2:before {\n    width: 70px;\n    height: 40px;\n    transform: rotate(25deg);\n    border-radius: 50%;\n    top: -25px;\n    left: 35px;\n    border-top: 1px solid rgba(0, 0, 0, 0.7);\n    z-index: -1;\n}\n.head .eye2:after {\n    width: 80px;\n    height: 25px;\n    transform: rotate(-30deg);\n    border-radius: 50%;\n    bottom: -5px;\n    left: 50px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.7);\n    z-index: -1;\n}\n/*\n * \u8FD9\u91CC\u662F\u9F3B\u5B50\n */\n.head .nose {\n    position: absolute;\n    width: 50px;\n    height: 30px;\n    top: 185px;\n    left: 145px;\n    transform: rotate(45deg);\n    border-radius: 50% 40% 50% 30%;\n    border-right: 1px solid rgba(0, 0, 0, 0.7);\n    background: rgba(255, 0, 0, 0);\n}\n/*\n * \u8FD9\u91CC\u662F\u5634\u5DF4\n */\n.head .mouth {\n    position: absolute;\n    width: 60px;\n    height: 25px;\n    background: #780202;\n    top: 270px;\n    left: 130px;\n    border-radius: 80px 80px 25px 25px;\n    box-shadow: inset 0 0 0 1px #000;\n}\n.head .mouth:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 70px;\n    height: 16px;\n    background: #fed8b1;\n    top: 15px;\n    left: 0;\n    border-radius: 50% 50% 0 0;\n}\n/*\n * \u98DE\u51FA\u6765\u4E24\u53EA\u5706\u8033\u6735\n */\n.ear1,\n.ear2 {\n    display: block;\n    position: absolute;\n    content: \"\";\n    background: #fed8b1;\n    border: 1px solid #666;\n    border-radius: 50%;\n}\n\n.ear1 {\n    width: 78px;\n    height: 75px;\n    top: 250px;\n    left: 150px;\n    z-index: -1;\n}\n.ear2 {\n    width: 78px;\n    height: 70px;\n    top: 250px;\n    left: 465px;\n    z-index: -1;\n}\n/*\n * \u9EC4\u8272\u7684\u8863\u670D\n */\n.body {\n    position: absolute;\n    top: 400px;\n    left: 220px;\n    border-radius: 50% 50% 0 0;\n    z-index: -1;\n    width: 255px;\n    height: 250px;\n    background: #fdfe76;\n    border: 1px solid #666;\n}\n/*\n * \u597D\u4E86\uFF0C\u5446\u5446\u7684Morty\u9001\u7ED9\u4F60\n */\n ";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.6f87c798.js.map