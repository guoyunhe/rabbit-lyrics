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
})({"oqtX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n[00:00.00] \u7A76\u7ADF\u5728\u60F3\u8C01\u7684\u4E8B\u60C5\u5462\uFF1F\n[00:03.10] \u5FC3\u7684\u4F4D\u7F6E\u4E89\u593A\u6218\n[00:05.76] \u5C31\u6230\u6CC1\u800C\u8A00\u3000\u4E00\u9032\u4E00\u9000\n[00:10.56] \u4E0D\u53EF\u4EE5\u5927\u610F\n[00:11.70] \u5176\u5BE6\u5440\u3000\u73FE\u5728\u53EA\u4F54\u64DA\u5C11\u6578\u5E7E\uFF05\u4F4D\u7F6E\n[00:16.73] \u5728\u4ED6\u7684\u5FC3\u4E2D\u6839\u672C\u6C92\u6709\u68F2\u8EAB\u4E4B\u6240\n[00:21.38]\n[00:21.51] \u5236\u670D\u7684\u53E3\u888B\u88E1\n[00:24.05] \u96B1\u85CF\u4E86\u771F\u5FC3\u7684\u8A71\u8A9E\n[00:26.71] \u6084\u6084\u5730\u3000\u6574\u7406\u8863\u9818\n[00:31.71] \u600E\u9EBC\u53EF\u80FD\u6703\u5982\u6B64\u7C21\u55AE\n[00:34.38] \u77AD\u89E3\u4ED6\u7DCA\u63E1\u8457\u7684\u8A71\u8A9E\n[00:36.90] \u5230\u6700\u5F8C\u9084\u662F\u53EA\u80FD\u5728\u9060\u8655\u89C0\u671B\u7684\u968E\u6BB5\n[00:41.81]\n[00:42.01] \u4F46\u662F\u5BE6\u969B\u4E0A\u662F\n[00:44.59] \u975E\u5E38\u60F3\u8981\u770B\u6E05\u4E00\u5207\n[00:47.25] \u61F7\u8457\u4E9B\u8A31\u671F\u5F85\u7684\u5167\u5FC3\u3000\u4E0D\u65B7\u9F13\u52D5\u8457\n[00:51.74] \u8EB2\u8EB2\u85CF\u85CF\u5730\u5077\u770B\u8457\n[00:54.97]\n[00:56.09] \u5973\u5B69\u5B50\u6700\u91CD\u8981\u7684\u6771\u897F\uFF08\u4E0D\u61F7\u597D\u610F\u5730\uFF09\n[00:58.73] \u7537\u5B69\u5B50\u6700\u91CD\u8981\u7684\u4E8B\u60C5\uFF08\u4EE4\u4EBA\u751F\u6C23\uFF09\n[01:01.53] \u9032\u9000\u5169\u96E3\u7684\u3000\u8A31\u591A\u4E8B\u60C5\n[01:06.26] \u5176\u4ED6\u4EC0\u9EBC\u7684\u5C31\u4E0D\u7528\u591A\u8003\u616E\u4E86\uFF08\u52C7\u5F80\u76F4\u524D\u5730\uFF09\n[01:09.03] \u53EA\u662F\u4E00\u77AC\u9593\u3000\u537B\u9084\u4E0D\u770B\u904E\u4F86\uFF08\u592A\u9072\u920D\u4E86\uFF09\n[01:11.68] \u5145\u5BE6\u611F\u5C31\u50CF\u6EFF\u6EA2\u51FA\u4F86\u4F3C\u5730\n[01:16.25] \u6F38\u6F38\u6EFF\u8DB3\u4E86\u6211\n[01:17.32] \u8AAA\u51FA\u689D\u4EF6\u5427\u3000\u518D\u7A0D\u5FAE\u89C0\u5BDF\u72C0\u6CC1\u5427\n[01:22.50] \u5F7C\u6B64\u90FD\u662FWin-Win\u3000\u63A5\u53D7\u9019\u4EFD\u4EA4\u6613\u5427\n[01:27.20]\n[01:27.33] \u5C31\u7B97\u662F\u9B54\u6CD5\u5C11\u5973\n[01:29.87] \u5C31\u7B97\u662F\u5730\u5E95\u4EBA\n[01:32.60] \u7169\u60F1\u7684\u4E8B\u60C5\u4E5F\u90FD\u4E00\u6A23\n[01:37.71] \u5C31\u7B97\u662F\u7570\u661F\u516C\u4E3B\n[01:40.13] \u5C31\u7B97\u662F\u5E7D\u9748\u5C11\u5973\n[01:42.71] \u5927\u5BB6\u5FC3\u8DF3\u90FD\u64B2\u901A\u64B2\u901A\u5730\u6200\u611B\u4E86\n[01:47.99] \u559C\u6B61\u4EC0\u9EBC\u985E\u578B\u4E4B\u985E\u7684\n[01:50.51] \u60F3\u50CF\u8457\u6700\u7406\u60F3\n[01:53.21] \u7684\u544A\u767D\u6642\u6A5F\n[01:55.66] \u6703\u662F\u8AB0\u7684\u81C9\u9F90\u6D6E\u73FE\u5728\u8166\u6D77\u4E2D\u5462\uFF1F\uFF01\n[02:01.82] \u7A81\u7136\u9593\u3000\u529B\u91CF\u4E0D\u65B7\u5730\u6E67\u51FA\uFF08\u771F\u662F\u4E0D\u53EF\u601D\u8B70\uFF09\n[02:04.46] \u611F\u4EBA\u7684\u3000\u6EAB\u67D4\u611F\u67D3\u8457\u773C\u7736\uFF08\u70BA\u4EC0\u9EBC\u5462\uFF09\n[02:07.15] \u9019\u4E9B\u5168\u90E8\u90FD\u662F\u8AB0\u7684\u8CAC\u4EFB\u5462\uFF1F\n[02:12.04] \u8EAB\u70BA\u5C0D\u624B\u7684\u6211\u662F\u4E0D\u6703\u8A8D\u8F38\u7684\uFF08\u5373\u4F7F\u9019\u6A23\uFF09\n[02:14.74] \u4F46\u662F\u8207\u90A3\u50A2\u4F19\u70BA\u6575\u662F\u8D0F\u4E0D\u4E86\u7684\uFF08\u70BA\u4EC0\u9EBC\u5462\uFF09\n[02:17.47] \u90A3\u9EBC\u6A23\u9019\u662F\u4E0D\u662F\u6709\u4E9B\u554F\u984C\u5462\uFF1F\n[02:22.15] \u5DF2\u7D93\u4F86\u4E0D\u53CA\u4E86\n[02:25.56]\n[02:45.74] \u5973\u5B69\u5B50\u6700\u91CD\u8981\u7684\u6771\u897F\uFF08\u4E0D\u61F7\u597D\u610F\u5730\uFF09\n[02:48.20] \u7537\u5B69\u5B50\u6700\u91CD\u8981\u7684\u4E8B\u60C5\uFF08\u4EE4\u4EBA\u751F\u6C23\uFF09\n[02:51.02] \u9032\u9000\u5169\u96E3\u7684\u3000\u8A31\u591A\u4E8B\u60C5\n[02:55.95] \u5176\u4ED6\u4EC0\u9EBC\u7684\u5C31\u4E0D\u7528\u591A\u8003\u616E\u4E86\uFF08\u52C7\u5F80\u76F4\u524D\u5730\uFF09\n[02:58.67] \u53EA\u662F\u4E00\u77AC\u9593\u3000\u537B\u9084\u4E0D\u770B\u904E\u4F86\uFF08\u592A\u9072\u920D\u4E86\uFF09\n[03:01.31] \u5145\u5BE6\u611F\u5C31\u50CF\u6EFF\u6EA2\u51FA\u4F86\u4F3C\u5730\n[03:06.01] \u6F38\u6F38\u6EFF\u8DB3\u4E86\u6211\n[03:07.02] \u8AAA\u51FA\u689D\u4EF6\u5427\u3000\u518D\u7A0D\u5FAE\u89C0\u5BDF\u72C0\u6CC1\u5427\n[03:11.54] \u53BB\u611F\u53D7\u9019\u6A23\u7684\u611F\u89BA\u3000\u63A5\u53D7\u9019\u4EFD\u4EA4\u6613\u5427\n[03:17.42] \u5176\u5BE6\u5440\u3000\u73FE\u5728\u53EA\u4F54\u64DA\u5C11\u6578\u5E7E\uFF05\u4F4D\u7F6E\n[03:22.48] \u5728\u4ED6\u7684\u5FC3\u4E2D\u6839\u672C\u6C92\u6709\u68F2\u8EAB\u4E4B\u6240\n[03:27.19]\n";
exports.default = _default;
},{}],"C3Ht":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n[00:00.00] \u8C01\u306E\u3053\u3068\u3092\u8003\u3048\u3066\u308B\u306E?\n           da re no ko to wo ka n ga e te ru no?\n           \u7A76\u7ADF\u5728\u60F3\u8C01\u7684\u4E8B\u60C5\u5462\uFF1F\n\n[00:03.10] \u30CF\u30FC\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u4E89\u593A\u6226\n           haato no supeesu so u da tsu se n\n           \u5FC3\u7684\u4F4D\u7F6E\u4E89\u593A\u6218\n\n[00:05.76] \u6226\u6CC1\u7684\u306B\u3000\u4E00\u9032\u4E00\u9000\u3067\n           ze n ryo u te ki ni i sshi n i tta i de\n           \u5C31\u6230\u6CC1\u800C\u8A00\u3000\u4E00\u9032\u4E00\u9000\n\n[00:10.56] \u6CB9\u65AD\u306A\u3089\u306A\u3044\u306A\n           yu u da n na ra na i na\n           \u4E0D\u53EF\u4EE5\u5927\u610F\n\n[00:11.70] \u3042\u306E\u306D\u3000\u4ECA\u306E\u3068\u3053\u3000\u307B\u3093\u306E\u6570\uFF05\u3057\u304B\n           a no ne i ma no to ko ho n no ka zu percent shi ka\n           \u5176\u5BE6\u5440\u3000\u73FE\u5728\u53EA\u4F54\u64DA\u5C11\u6578\u5E7E\uFF05\u4F4D\u7F6E\n\n[00:16.73] \u30A2\u30A4\u30C4\u306E\u5FC3\u306B\u5C45\u5834\u6240\u304C\u306A\u3044\u3093\u3060\n           aitsu no ko ko ro ni i ba sho ga na i n da\n           \u5728\u4ED6\u7684\u5FC3\u4E2D\u6839\u672C\u6C92\u6709\u68F2\u8EAB\u4E4B\u6240\n\n[00:21.38]\n\n[00:21.51] \u5236\u670D\u306E\u30DD\u30B1\u30C3\u30C8\n           se i fu ku no pokeeto\n           \u5236\u670D\u7684\u53E3\u888B\u88E1\n\n[00:24.05] \u30DB\u30F3\u30CD\u3092\u5FCD\u3070\u305B\u3066\n           ho n ne wo shi no ba se te\n           \u96B1\u85CF\u4E86\u771F\u5FC3\u7684\u8A71\u8A9E\n\n[00:26.71] \u305D\u3063\u3068\u3000\u3048\u308A\u3092\u6B63\u3059\n           so tto e ri wo ta da su\n           \u6084\u6084\u5730\u3000\u6574\u7406\u8863\u9818\n\n[00:31.71] \u305D\u3093\u306A\u7C21\u5358\u306B\u306F\n           so n na ka n ta n ni wa\n           \u600E\u9EBC\u53EF\u80FD\u6703\u5982\u6B64\u7C21\u55AE\n\n[00:34.38] \u624B\u306E\u5185\u3000\u660E\u304B\u305B\u306A\u3044\n           te no chi a ka se na i\n           \u77AD\u89E3\u4ED6\u7DCA\u63E1\u8457\u7684\u8A71\u8A9E\n\n[00:36.90] \u3042\u304F\u307E\u3067\u307E\u3060\u3000\u69D8\u5B50\u898B\u306E\u6BB5\u968E\n           a ku ma de ma da yo u su mi no da n ka i\n           \u5230\u6700\u5F8C\u9084\u662F\u53EA\u80FD\u5728\u9060\u8655\u89C0\u671B\u7684\u968E\u6BB5\n\n[00:41.81]\n\n[00:42.01] \u3060\u3051\u3069\u672C\u5F53\u306F\u306D\n           da ke do ho n to u wa ne\n           \u4F46\u662F\u5BE6\u969B\u4E0A\u662F\n\n[00:44.59] \u898B\u7834\u3063\u3066\u6B32\u3057\u3044\u306E\n           mi ya bu tte ho shi i no\n           \u975E\u5E38\u60F3\u8981\u770B\u6E05\u4E00\u5207\n\n[00:47.25] \u6DE1\u3044\u671F\u5F85\u306B\u80F8\u3000\u3068\u304D\u3081\u304B\u3057\u3066\n           a wa i ki ta i ni mu ne to ki me ka shi te\n           \u61F7\u8457\u4E9B\u8A31\u671F\u5F85\u7684\u5167\u5FC3\u3000\u4E0D\u65B7\u9F13\u52D5\u8457\n\n[00:51.74] \u30C1\u30E9\u30C1\u30E9\u3068\u898B\u3066\u308B\n           chira chira to mi te ru\n           \u8EB2\u8EB2\u85CF\u85CF\u5730\u5077\u770B\u8457\n\n[00:54.97]\n\n[00:56.09] \u30AA\u30F3\u30CA\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30E2\u30CE\uFF08\u610F\u5730\u60AA\u3067\uFF09\n           onna no ko no da i ji na mono (i ji wa ru de)\n           \u5973\u5B69\u5B50\u6700\u91CD\u8981\u7684\u6771\u897F\uFF08\u4E0D\u61F7\u597D\u610F\u5730\uFF09\n\n[00:58.73] \u30AA\u30C8\u30B3\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30B3\u30C8\uFF08\u30E0\u30AB\u3064\u304F)\n           otoko no ko no da i ji na koto (mu ka tsu ku)\n           \u7537\u5B69\u5B50\u6700\u91CD\u8981\u7684\u4E8B\u60C5\uFF08\u4EE4\u4EBA\u751F\u6C23\uFF09\n\n[01:01.53] \u5F15\u304F\u306B\u5F15\u3051\u306A\u3044\u3000\u305D\u308C\u305E\u308C\u306E\u4E8B\u60C5\n           hi ku ni hi ke na i so re zo re no ji jyo u\n           \u9032\u9000\u5169\u96E3\u7684\u3000\u8A31\u591A\u4E8B\u60C5\n\n[01:06.26] \u307B\u304B\u306B\u4F55\u3082\u8003\u3048\u3089\u3093\u306A\u3044\uFF08\u771F\u3063\u76F4\u3050\u3067\uFF09\n           ho ka ni na ni mo ka n ga e ra n na i (ma ssu gu gu de)\n           \u5176\u4ED6\u4EC0\u9EBC\u7684\u5C31\u4E0D\u7528\u591A\u8003\u616E\u4E86\uFF08\u52C7\u5F80\u76F4\u524D\u5730\uFF09\n\n[01:09.03] \u4E00\u77AC\u3060\u3063\u3066\u3000\u3088\u305D\u898B\u3067\u304D\u306A\u3044\uFF08\u30CB\u30D6\u3044\u306D\uFF09\n           i sshu n da tte yo so mi de ki na i (ni bu i ne)\n           \u53EA\u662F\u4E00\u77AC\u9593\u3000\u537B\u9084\u4E0D\u770B\u904E\u4F86\uFF08\u592A\u9072\u920D\u4E86\uFF09\n\n[01:11.68] \u5145\u5B9F\u611F\u3000\u3042\u3075\u308C\u308B\u307B\u3069\u306B\n           jyu u ji tsu ka n a fu re ru ho do ni\n           \u5145\u5BE6\u611F\u5C31\u50CF\u6EFF\u6EA2\u51FA\u4F86\u4F3C\u5730\n\n[01:16.25] \u6E80\u305F\u3057\u3066\u3042\u3052\u308B\u3088\n           mi ta shi te a ge ru yo\n           \u6F38\u6F38\u6EFF\u8DB3\u4E86\u6211\n\n[01:17.32] \u6761\u4EF6\u3061\u3089\u3064\u304B\u305B\u3000\u69D8\u5B50\u3046\u304B\u304C\u3063\u3066\u898B\u3066\u308B\n           jyo u ke n chi ra tsu ka se yo u su u ka ga tte mi te ru\n           \u8AAA\u51FA\u689D\u4EF6\u5427\u3000\u518D\u7A0D\u5FAE\u89C0\u5BDF\u72C0\u6CC1\u5427\n\n[01:22.50] \u304A\u4E92\u3044win-win\u306A\u3000\u30C8\u30EA\u30D2\u30AD\u3057\u3088\u3046\u3088\n           o ta ga i win-win na tori hiki shi n yo u yo\n           \u5F7C\u6B64\u90FD\u662Fwin-win\u3000\u63A5\u53D7\u9019\u4EFD\u4EA4\u6613\u5427\n\n[01:27.20]\n\n[01:27.33] \u9B54\u6CD5\u5C11\u5973\u3060\u3063\u3066\n           ma ho u sho u jyo da tte\n           \u5C31\u7B97\u662F\u9B54\u6CD5\u5C11\u5973\n\n[01:29.87] \u5730\u5E95\u306E\u6C11\u3060\u3063\u3066\n           chi te i no ta mi da tte\n           \u5C31\u7B97\u662F\u5730\u5E95\u4EBA\n\n[01:32.60] \u60A9\u3080\u3053\u3068\u306F\u540C\u3058\n           na ya mu ko to wa o na ji\n           \u7169\u60F1\u7684\u4E8B\u60C5\u4E5F\u90FD\u4E00\u6A23\n\n[01:37.71] \u7570\u661F\u306E\u59EB\u3060\u3063\u3066\n           i se i no hi me da tte\n           \u5C31\u7B97\u662F\u7570\u661F\u516C\u4E3B\n\n[01:40.13] \u30AA\u30D0\u30B1\u306E\u5C11\u5973\u3060\u3063\u3066\n           obake no sho u jyo u da tte\n           \u5C31\u7B97\u662F\u5E7D\u9748\u5C11\u5973\n\n[01:42.71] \u30C9\u30AD\u30C9\u30AD\u3057\u3066\u3000\u307F\u3093\u306A\u604B\u3092\u3059\u308B\n           doki doki shi te mi n na ko i wo su ru\n           \u5927\u5BB6\u5FC3\u8DF3\u90FD\u64B2\u901A\u64B2\u901A\u5730\u6200\u611B\u4E86\n\n[01:47.99] \u597D\u304D\u306A\u30BF\u30A4\u30D7\u3060\u3068\u304B\n           su ki na taibu da to ka\n           \u559C\u6B61\u4EC0\u9EBC\u985E\u578B\u4E4B\u985E\u7684\n\n[01:50.51] \u7406\u60F3\u306E\u544A\u767D\u3092\n           ri so u no ko ku ha ku wo\n           \u60F3\u50CF\u8457\u6700\u7406\u60F3\n\n[01:53.21] \u601D\u3044\u63CF\u3044\u305F\u65F6\n           o mo i e ga i da to ki\n           \u7684\u544A\u767D\u6642\u6A5F\n\n[01:55.66] \u8AB0\u306E\u9854\u304C\u6D6E\u304B\u3093\u3067\u304D\u3061\u3083\u3046\u306E\uFF1F\uFF01\n           da re no ka o ga u ka n de ki cha u no?!\n           \u6703\u662F\u8AB0\u7684\u81C9\u9F90\u6D6E\u73FE\u5728\u8166\u6D77\u4E2D\u5462\uFF1F\uFF01\n\n[02:01.82] \u7A81\u7136\u3000\u30C1\u30AB\u30E9\u6E67\u3044\u3066\u304D\u305F\u308A\uFF08\u4E0D\u601D\u8B70\u3060\u3088\uFF09\n           to tsu ze n chikara wa i te ki ta ri (fu shi gi da yo)\n           \u7A81\u7136\u9593\u3000\u529B\u91CF\u4E0D\u65B7\u5730\u6E67\u51FA\uFF08\u771F\u662F\u4E0D\u53EF\u601D\u8B70\uFF09\n\n[02:04.46] \u30DB\u30ED\u30EA\u3000\u512A\u3057\u3055\u304C\u67D3\u307F\u305F\u308A\uFF08\u306A\u305C\u306A\u306E\uFF09\n           horori ya sa shi sa ga shi mi ta ri (na ze na no)\n           \u611F\u4EBA\u7684\u3000\u6EAB\u67D4\u611F\u67D3\u8457\u773C\u7736\uFF08\u70BA\u4EC0\u9EBC\u5462\uFF09\n\n[02:07.15] \u305D\u308C\u306F\u5168\u90E8\u3000\u8AB0\u306E\u305B\u3044\u304B\u306A\n           so re wa ze n bu da re no se i ka na\n           \u9019\u4E9B\u5168\u90E8\u90FD\u662F\u8AB0\u7684\u8CAC\u4EFB\u5462\uFF1F\n\n[02:12.04] \u30E9\u30A4\u30D0\u30EB\u306B\u306F\u8CA0\u3051\u305F\u304F\u306A\u3044\uFF08\u305D\u308C\u306A\u306E\u306B\uFF09\n           raibaru ni wa ma ke ta ku na i (so re na no ni)\n           \u8EAB\u70BA\u5C0D\u624B\u7684\u6211\u662F\u4E0D\u6703\u8A8D\u8F38\u7684\uFF08\u5373\u4F7F\u9019\u6A23\uFF09\n\n[02:14.74] \u3060\u3051\u3069\u30A2\u30A4\u30C4\u306B\u306F\u52DD\u3066\u306A\u3044\uFF08\u306A\u305C\u306A\u306E\uFF09\n           da ke do aitsu ni wa ka te na i (na ze na no)\n           \u4F46\u662F\u8207\u90A3\u50A2\u4F19\u70BA\u6575\u662F\u8D0F\u4E0D\u4E86\u7684\uFF08\u70BA\u4EC0\u9EBC\u5462\uFF09\n\n[02:17.47] \u305D\u308C\u3063\u3066\u3061\u3087\u3063\u3068\u554F\u984C\u3042\u308B\u3051\u3069\n           so re tte cho tto mo n da i a ru ke do\n           \u90A3\u9EBC\u6A23\u9019\u662F\u4E0D\u662F\u6709\u4E9B\u554F\u984C\u5462\uFF1F\n\n[02:22.15] \u3082\u3046\u624B\u9045\u308C\u3060\u306D\n           mo u te o ku re da ne\n           \u5DF2\u7D93\u4F86\u4E0D\u53CA\u4E86\n\n[02:25.56]\n\n[02:45.74] \u30AA\u30F3\u30CA\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30E2\u30CE\uFF08\u610F\u5730\u60AA\u3067\uFF09\n           onna no ko no da i ji na mono (i ji wa ru de)\n           \u5973\u5B69\u5B50\u6700\u91CD\u8981\u7684\u6771\u897F\uFF08\u4E0D\u61F7\u597D\u610F\u5730\uFF09\n\n[02:48.20] \u30AA\u30C8\u30B3\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30B3\u30C8\uFF08\u30E0\u30AB\u3064\u304F\uFF09\n           otoko no ko no da i ji na koto (mu ka tsu ku)\n           \u7537\u5B69\u5B50\u6700\u91CD\u8981\u7684\u4E8B\u60C5\uFF08\u4EE4\u4EBA\u751F\u6C23\uFF09\n\n[02:51.02] \u5F15\u304F\u306B\u5F15\u3051\u306A\u3044\u3000\u305D\u308C\u305E\u308C\u306E\u4E8B\u60C5\n           hi ku ni hi ke na i so re zo re no ji jyo u\n           \u9032\u9000\u5169\u96E3\u7684\u3000\u8A31\u591A\u4E8B\u60C5\n\n[02:55.95] \u307B\u304B\u306B\u4F55\u3082\u8003\u3048\u3089\u3093\u306A\u3044\uFF08\u771F\u3063\u76F4\u3050\u3067\uFF09\n           ho ka ni na ni mo ka n ga e ra n na i (ma ssu gu gu de)\n           \u5176\u4ED6\u4EC0\u9EBC\u7684\u5C31\u4E0D\u7528\u591A\u8003\u616E\u4E86\uFF08\u52C7\u5F80\u76F4\u524D\u5730\uFF09\n\n[02:58.67] \u4E00\u77AC\u3060\u3063\u3066\u3000\u3088\u305D\u898B\u3067\u304D\u306A\u3044\uFF08\u30CB\u30D6\u3044\u306D\uFF09\n           i sshu n da tte yo so mi de ki na i (ni bu i ne)\n           \u53EA\u662F\u4E00\u77AC\u9593\u3000\u537B\u9084\u4E0D\u770B\u904E\u4F86\uFF08\u592A\u9072\u920D\u4E86\uFF09\n\n[03:01.31] \u5145\u5B9F\u611F\u3000\u3042\u3075\u308C\u308B\u307B\u3069\u306B\n           jyu u ji tsu ka n a fu re ru ho do ni\n           \u5145\u5BE6\u611F\u5C31\u50CF\u6EFF\u6EA2\u51FA\u4F86\u4F3C\u5730\n\n[03:06.01] \u6E80\u305F\u3057\u3066\u3042\u3052\u308B\u3088\n           mi ta shi te a ge ru yo\n           \u6F38\u6F38\u6EFF\u8DB3\u4E86\u6211\n\n[03:07.02] \u6761\u4EF6\u3061\u3089\u3064\u304B\u305B\u3000\u69D8\u5B50\u3046\u304B\u304C\u3063\u3066\n           jyo u ke n chi ra tsu ka se yo u su u ka ga tte\n           \u8AAA\u51FA\u689D\u4EF6\u5427\u3000\u518D\u7A0D\u5FAE\u89C0\u5BDF\u72C0\u6CC1\u5427\n\n[03:11.54] \u305D\u3093\u306A\u611F\u3058\u306E\u3000\u30C8\u30EA\u30D2\u30AD\u3057\u3088\u3046\u3088\n           so n na ka n ji no tori hiki shi yo u yo\n           \u53BB\u611F\u53D7\u9019\u6A23\u7684\u611F\u89BA\u3000\u63A5\u53D7\u9019\u4EFD\u4EA4\u6613\u5427\n\n[03:17.42] \u3042\u306E\u306D\u4ECA\u306E\u3053\u3068\u3000\u307B\u3093\u306E\u6570\uFF05\u3057\u304B\n           a no ne i ma no ko to ho n no ka zu percent shi ka\n           \u5176\u5BE6\u5440\u3000\u73FE\u5728\u53EA\u4F54\u64DA\u5C11\u6578\u5E7E\uFF05\u4F4D\u7F6E\n\n[03:22.48] \u30A2\u30A4\u30C4\u306E\u5FC3\u306B\u3000\u5C45\u5834\u6240\u304C\u306A\u3044\u3093\u3060\n           aitsu no ko ko ro ni i ba sho ga na i n da\n           \u5728\u4ED6\u7684\u5FC3\u4E2D\u6839\u672C\u6C92\u6709\u68F2\u8EAB\u4E4B\u6240\n\n[03:27.19]\n";
exports.default = _default;
},{}],"YpTc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n[00:00.00] \u8C01\u306E\u3053\u3068\u3092\u8003\u3048\u3066\u308B\u306E?\n[00:03.10] \u30CF\u30FC\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u4E89\u593A\u6226\n[00:05.76] \u6226\u51B5\u7684\u306B \u4E00\u8FDB\u4E00\u9000\u3067\n[00:10.56] \u6CB9\u65AD\u306A\u3089\u306A\u3044\u306A\n[00:11.70] \u3042\u306E\u306D \u4ECA\u306E\u3068\u3053 \u307B\u3093\u306E\u6570\uFF05\u3057\u304B\n[00:16.73] \u30A2\u30A4\u30C4\u306E\u5FC3\u306B \u5C45\u573A\u6240\u304C\u306A\u3044\u3093\u3060\n[00:21.38]\n[00:21.51] \u5236\u670D\u306E\u30DD\u30B1\u30C3\u30C8\n[00:24.05] \u30DB\u30F3\u30CD\u3092\u5FCD\u3070\u305B\u3066\n[00:26.71] \u305D\u3063\u3068 \u3048\u308A\u3092\u6B63\u3059\n[00:31.71] \u305D\u3093\u306A\u7B80\u5358\u306B\u306F\n[00:34.38] \u624B\u306E\u5185 \u660E\u304B\u305B\u306A\u3044\n[00:36.90] \u3042\u304F\u307E\u3067\u307E\u3060 \u69D8\u5B50\u89C1\u306E\u6BB5\u9636\n[00:41.81]\n[00:42.01] \u3060\u3051\u3069\u672C\u5F53\u306F\u306D\n[00:44.59] \u89C1\u7834\u3063\u3066\u6B32\u3057\u3044\u306E\n[00:47.25] \u6DE1\u3044\u671F\u5F85\u306B\u80F8 \u3068\u304D\u3081\u304B\u3057\u3066\n[00:51.74] \u30C1\u30E9\u30C1\u30E9\u3068\u89C1\u3066\u308B\n[00:54.97]\n[00:56.09] \u30AA\u30F3\u30CA\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30E2\u30CE(\u610F\u5730\u60AA\u3067)\n[00:58.73] \u30AA\u30C8\u30B3\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30B3\u30C8(\u30E0\u30AB\u3064\u304F)\n[01:01.53] \u5F15\u304F\u306B\u5F15\u3051\u306A\u3044 \u305D\u308C\u305E\u308C\u306E\u4E8B\u60C5\n[01:06.26] \u307B\u304B\u306B\u4F55\u3082\u8003\u3048\u3089\u3093\u306A\u3044(\u771F\u3063\u76F4\u3050\u3067)\n[01:09.03] \u4E00\u77AC\u3060\u3063\u3066 \u3088\u305D\u89C1\u3067\u304D\u306A\u3044(\u30CB\u30D6\u3044\u306D)\n[01:11.68] \u5145\u5B9F\u611F \u3042\u3075\u308C\u308B\u307B\u3069\u306B\n[01:16.25] \u6E80\u305F\u3057\u3066\u3042\u3052\u308B\u3088\n[01:17.32] \u6761\u4EF6\u3061\u3089\u3064\u304B\u305B \u69D8\u5B50\u3046\u304B\u304C\u3063\u3066\u89C1\u3066\u308B\n[01:22.50] \u304A\u4E92\u3044Win-Win\u306A \u30C8\u30EA\u30D2\u30AD\u3057\u3088\u3046\u3088\n[01:27.20]\n[01:27.33] \u9B54\u6CD5\u5C11\u5973\u3060\u3063\u3066\n[01:29.87] \u5730\u5E95\u306E\u6C11\u3060\u3063\u3066\n[01:32.60] \u60A9\u3080\u3068\u3053\u306F\u540C\u3058\n[01:37.71] \u5F02\u661F\u306E\u59EB\u3060\u3063\u3066\n[01:40.13] \u30AA\u30D0\u30B1\u306E\u5C11\u5973\u3060\u3063\u3066\n[01:42.71] \u30C9\u30AD\u30C9\u30AD\u3057\u3066 \u307F\u3093\u306A\u604B\u3092\u3059\u308B\n[01:47.99] \u597D\u304D\u306A\u30BF\u30A4\u30D7\u3060\u3068\u304B\n[01:50.51] \u7406\u60F3\u306E\u544A\u767D\u3092\n[01:53.21] \u601D\u3044\u63CF\u3044\u305F\u65F6\n[01:55.66] \u8C01\u306E\u989C\u304C\u6D6E\u304B\u3093\u3067\u304D\u3061\u3083\u3046\u306E?!\n[02:01.82] \u7A81\u7136 \u30C1\u30AB\u30E9\u6D8C\u3044\u3066\u304D\u305F\u308A(\u4E0D\u601D\u8BAE\u3060\u3088)\n[02:04.46] \u30DB\u30ED\u30EA \u4F18\u3057\u3055\u304C\u67D3\u307F\u305F\u308A(\u306A\u305C\u306A\u306E)\n[02:07.15] \u305D\u308C\u306F\u5168\u90E8 \u8C01\u306E\u305B\u3044\u304B\u306A\n[02:12.04] \u30E9\u30A4\u30D0\u30EB\u306B\u306F\u8D1F\u3051\u305F\u304F\u306A\u3044(\u305D\u308C\u306A\u306E\u306B)\n[02:14.74] \u3060\u3051\u3069\u30A2\u30A4\u30C4\u306B\u306F\u80DC\u3066\u306A\u3044(\u306A\u305C\u306A\u306E)\n[02:17.47] \u305D\u308C\u3063\u3066\u3061\u3087\u3063\u3068\u95EE\u9898\u3042\u308B\u3051\u3069\n[02:22.15] \u3082\u3046\u624B\u9045\u308C\u3060\u306D\n[02:25.56]\n[02:45.74] \u30AA\u30F3\u30CA\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30E2\u30CE(\u610F\u5730\u60AA\u3067)\n[02:48.20] \u30AA\u30C8\u30B3\u30CE\u30B3\u306E\u5927\u4E8B\u306A\u30B3\u30C8(\u30E0\u30AB\u3064\u304F)\n[02:51.02] \u5F15\u304F\u306B\u5F15\u3051\u306A\u3044 \u305D\u308C\u305E\u308C\u306E\u4E8B\u60C5\n[02:55.95] \u307B\u304B\u306B\u4F55\u3082\u8003\u3048\u3089\u3093\u306A\u3044(\u771F\u3063\u76F4\u3050\u3067)\n[02:58.67] \u4E00\u77AC\u3060\u3063\u3066 \u3088\u305D\u89C1\u3067\u304D\u306A\u3044(\u30CB\u30D6\u3044\u306D)\n[03:01.31] \u5145\u5B9F\u611F \u3042\u3075\u308C\u308B\u307B\u3069\u306B\n[03:06.01] \u6E80\u305F\u3057\u3066\u3042\u3052\u308B\u3088\n[03:07.02] \u6761\u4EF6\u3061\u3089\u3064\u304B\u305B \u69D8\u5B50\u3046\u304B\u304C\u3063\u3066\n[03:11.54] \u305D\u3093\u306A\u611F\u3058\u306E \u30C8\u30EA\u30D2\u30AD\u3057\u3088\u3046\u3088\n[03:17.42] \u3042\u306E\u306D\u4ECA\u306E\u3068\u3053 \u307B\u3093\u306E\u6570\uFF05\u3057\u304B\n[03:22.48] \u30A2\u30A4\u30C4\u306E\u5FC3\u306B \u5C45\u573A\u6240\u304C\u306A\u3044\u3093\u3060\n[03:27.19]\n";
exports.default = _default;
},{}],"WdFH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n[00:00.50] da [00:00.70]re [00:00.90]no [00:01.20]ko [00:01.35]to [00:01.50]wo [00:01.80]ka [00:01.90]n [00:02.15]ga [00:02.30]e [00:02.50]te [00:02.65]ru [00:02.80]no?\n[00:03.10] haato [00:03.70]no [00:03.80]supeesu [00:04.60]so [00:04.80]u [00:05.00]da [00:05.20]tsu [00:05.50]se [00:05.60]n\n[00:05.76] ze [00:06.20]n [00:06.45]ryo [00:06.65]u [00:06.90]te [00:07.20]ki [00:07.40]ni [00:08.20]i [00:08.40]sshi [00:08.80]n [00:09.20]i [00:09.40]tta [00:09.60]i [00:09.80]de\n[00:10.56] yu u da n na ra na i na\n[00:11.70] a no ne i ma no to ko ho n no ka zu percent shi ka\n[00:16.73] aitsu no ko ko ro ni i ba sho ga na i n da\n[00:21.38]\n\n[00:21.51] se i fu ku no pokeeto\n[00:24.05] ho n ne wo shi no ba se te\n[00:26.71] so tto e ri wo ta da su\n[00:31.71] so n na ka n ta n ni wa\n[00:34.38] te no chi a ka se na i\n[00:36.90] a ku ma de ma da yo u su mi no da n ka i\n[00:41.81]\n\n[00:42.01] da ke do ho n to u wa ne\n[00:44.59] mi ya bu tte ho shi i no\n[00:47.25] a wa i ki ta i ni mu ne to ki me ka shi te\n[00:51.74] chira chira to mi te ru\n[00:54.97]\n\n[00:56.09] onna no ko no da i ji na mono (i ji wa ru de)\n[00:58.73] otoko no ko no da i ji na koto (mu ka tsu ku)\n[01:01.53] hi ku ni hi ke na i so re zo re no ji jyo u\n[01:06.26] ho ka ni na ni mo ka n ga e ra n na i (ma ssu gu gu de)\n[01:09.03] i sshu n da tte yo so mi de ki na i (ni bu i ne)\n[01:11.68] jyu u ji tsu ka n a fu re ru ho do ni\n[01:16.25] mi ta shi te a ge ru yo\n[01:17.32] jyo u ke n chi ra tsu ka se yo u su u ka ga tte mi te ru\n[01:22.50] o ta ga i win-win na tori hiki shi n yo u yo\n[01:27.20]\n\n[01:27.33] ma ho u sho u jyo da tte\n[01:29.87] chi te i no ta mi da tte\n[01:32.60] na ya mu ko to wa o na ji\n[01:37.71] i se i no hi me da tte\n[01:40.13] obake no sho u jyo u da tte\n[01:42.71] doki doki shi te mi n na ko i wo su ru\n[01:47.99] su ki na taibu da to ka\n[01:50.51] ri so u no ko ku ha ku wo\n[01:53.21] o mo i e ga i da to ki\n[01:55.66] da re no ka o ga u ka n de ki cha u no?!\n[02:01.82] to tsu ze n chikara wa i te ki ta ri (fu shi gi da yo)\n[02:04.46] horori ya sa shi sa ga shi mi ta ri (na ze na no)\n[02:07.15] so re wa ze n bu da re no se i ka na\n[02:12.04] raibaru ni wa ma ke ta ku na i (so re na no ni)\n[02:14.74] da ke do aitsu ni wa ka te na i (na ze na no)\n[02:17.47] so re tte cho tto mo n da i a ru ke do\n[02:22.15] mo u te o ku re da ne\n[02:25.56]\n\n[02:45.74] onna no ko no da i ji na mono (i ji wa ru de)\n[02:48.20] otoko no ko no da i ji na koto (mu ka tsu ku)\n[02:51.02] hi ku ni hi ke na i so re zo re no ji jyo u\n[02:55.95] ho ka ni na ni mo ka n ga e ra n na i (ma ssu gu gu de)\n[02:58.67] i sshu n da tte yo so mi de ki na i (ni bu i ne)\n[03:01.31] jyu u ji tsu ka n a fu re ru ho do ni\n[03:06.01] mi ta shi te a ge ru yo\n[03:07.02] jyo u ke n chi ra tsu ka se yo u su u ka ga tte\n[03:11.54] so n na ka n ji no tori hiki shi yo u yo\n[03:17.42] a no ne i ma no ko to ho n no ka zu percent shi ka\n[03:22.48] aitsu no ko ko ro ni i ba sho ga na i n da\n[03:27.19]\n";
exports.default = _default;
},{}],"AyIz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chinese", {
  enumerable: true,
  get: function () {
    return _chinese.default;
  }
});
Object.defineProperty(exports, "combined", {
  enumerable: true,
  get: function () {
    return _combined.default;
  }
});
Object.defineProperty(exports, "japanese", {
  enumerable: true,
  get: function () {
    return _japanese.default;
  }
});
Object.defineProperty(exports, "romaji", {
  enumerable: true,
  get: function () {
    return _romaji.default;
  }
});

var _chinese = _interopRequireDefault(require("./chinese"));

var _combined = _interopRequireDefault(require("./combined"));

var _japanese = _interopRequireDefault(require("./japanese"));

var _romaji = _interopRequireDefault(require("./romaji"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./chinese":"oqtX","./combined":"C3Ht","./japanese":"YpTc","./romaji":"WdFH"}],"ln7H":[function(require,module,exports) {
"use strict";

var _lyrics = require("./lyrics");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var examples = document.getElementsByClassName('example');

var _iterator = _createForOfIteratorHelper(examples),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var example = _step.value;
    example.innerHTML = example.innerHTML.replace('{{japanese}}', _lyrics.japanese).replace('{{chinese}}', _lyrics.chinese).replace('{{combined}}', _lyrics.combined).replace('{{romaji}}', _lyrics.romaji);
    var pre = document.createElement('pre');
    var code = document.createElement('code');
    code.className = 'language-html';
    code.textContent = example.innerHTML.trim().replaceAll('guoyunhe.me/wp-content/uploads/2015/03/hao-gan-win-win-wu-tiao-jian', 'example.com/audio').replaceAll('        ', '');
    pre.append(code);
    example.append(pre);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
},{"./lyrics":"AyIz"}],"c7W8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findMediaElement;

/**
 * Find first audio or video element before lyrics element. Only used when
 * no mediaElement was specified. If nothing found, return null.
 */
function findMediaElement(element) {
  if (element.dataset.media) {
    var mediaElement = document.querySelector(element.dataset.media);
    if (mediaElement) return mediaElement;
  }

  var previousElement = element.previousElementSibling; // First, lookup siblings before

  while (previousElement) {
    if (previousElement.tagName.toLowerCase() === 'audio' || previousElement.tagName.toLowerCase() === 'video') {
      return previousElement;
    } else {
      var mediaChildren = previousElement.querySelectorAll('audio, video');

      if (mediaChildren.length > 0) {
        return mediaChildren.item(mediaChildren.length - 1);
      }
    }

    previousElement = previousElement.previousElementSibling;
  }

  if (element.parentElement) {
    return findMediaElement(element.parentElement);
  } else {
    return null;
  }
}
},{}],"vCxL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__spreadArray = __spreadArray;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"SBa0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseTimestamp;

/** Parse timestamp and return number in seconds */
function parseTimestamp(timestamp) {
  if (!timestamp || typeof timestamp !== 'string') return 0;
  var results; // [hh:mm:ss.xx] format, used by audio books

  results = timestamp.match(/\[(\d+):(\d+):(\d+\.\d+)\]/);

  if (results && results.length === 4) {
    return parseInt(results[1]) * 60 * 60 + parseInt(results[2]) * 60 + parseFloat(results[3]);
  } // [mm:ss.xx] format, used for songs


  results = timestamp.match(/\[(\d+):(\d+\.\d+)\]/);

  if (results && results.length === 3) {
    return parseInt(results[1]) * 60 + parseFloat(results[2]);
  }

  return 0;
}
},{}],"fEzS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseLyrics;

var _parseTimestamp = _interopRequireDefault(require("./parseTimestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeRegex = /\[(\d+:)?\d+:\d+\.\d+\]/;
var startRegex = /^\[(\d+:)?\d+:\d+\.\d+\]/;
var endRegex = /\[(\d+:)?\d+:\d+\.\d+\]$/;

function parseLyrics(source) {
  var lines = source.trim().split(/\r\n|\n|\r/).map(function (line) {
    return line.trim();
  });
  var results = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var startMatch = line.match(startRegex);
    var endMatch = line.match(endRegex); // Infinity will be replaced later by checking the context

    var startsAt = startMatch ? (0, _parseTimestamp.default)(startMatch[0]) : Infinity;
    var endsAt = endMatch ? (0, _parseTimestamp.default)(endMatch[0]) : Infinity;
    var content = parseLyricsLine(line);
    results.push({
      startsAt: startsAt,
      endsAt: endsAt,
      content: content
    });
  }

  fillMissingEndTimestamps(results);
  fillMissingStartTimestamps(results);
  return results;
}

function parseLyricsLine(source) {
  var results = [];
  var pointer = 0;
  var lastTime = Infinity;

  while (pointer < source.length) {
    var match = source.substr(pointer).match(timeRegex);

    if (match && match[0] && typeof match.index !== 'undefined') {
      var time = (0, _parseTimestamp.default)(match[0]);

      if (match.index > 0) {
        results.push({
          startsAt: lastTime,
          endsAt: time,
          content: source.substr(pointer, match.index)
        });
      }

      lastTime = time;
      pointer += match.index + match[0].length;
    } else {
      results.push({
        startsAt: lastTime,
        endsAt: Infinity,
        content: source.substr(pointer)
      });
      pointer = source.length;
    }
  }

  return results;
}

function fillMissingStartTimestamps(results) {
  var lastTime = Infinity;

  for (var i = 0; i < results.length; i++) {
    if (results[i].startsAt === Infinity) {
      results[i].startsAt = lastTime;
    } else {
      lastTime = results[i].startsAt;
    }

    for (var j = 0; j < results[i].content.length; j++) {
      if (results[i].content[j].startsAt === Infinity) {
        results[i].content[j].startsAt = lastTime;
      } else {
        lastTime = results[i].content[j].startsAt;
      }
    }
  }
}

function fillMissingEndTimestamps(results) {
  var lastTime = Infinity;

  for (var i = results.length - 1; i >= 0; i--) {
    if (results[i].endsAt === Infinity) {
      results[i].endsAt = lastTime;
    } else {
      lastTime = results[i].endsAt;
    }

    for (var j = results[i].content.length - 1; j >= 0; j--) {
      if (results[i].content[j].endsAt === Infinity) {
        results[i].content[j].endsAt = lastTime;
      } else {
        lastTime = results[i].content[j].endsAt;
      }

      if (results[i].content[j].startsAt !== Infinity) {
        lastTime = results[i].content[j].startsAt;
      }
    }

    if (results[i].startsAt !== Infinity) {
      lastTime = results[i].startsAt;
    }
  }
}
},{"./parseTimestamp":"SBa0"}],"qkbK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _parseLyrics = _interopRequireDefault(require("./parseLyrics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RabbitLyrics main controller.
 */
var RabbitLyrics =
/** @class */
function () {
  function RabbitLyrics(
  /** Lyrics container element. Support data-* attributes for options. */
  lyricsElement,
  /** Audio or video element. Note: embeded media elements in <iframe> are not supported. */
  mediaElement,
  /** Lyrics options. */
  options) {
    var _this = this;

    this.lyricsElement = lyricsElement;
    this.mediaElement = mediaElement;
    this.viewMode = 'clip';
    this.alignment = 'center';
    this.lyrics = '';
    this.lyricsLines = [];

    this.handleStatusChange = function (e) {
      var status; // playing, paused, waiting, ended

      switch (e.type) {
        case 'play':
        case 'playing':
          status = 'playing';
          break;

        case 'pause':
          status = 'paused';
          break;

        case 'waiting':
          status = 'waiting';
          break;

        case 'ended':
          status = 'ended';
          break;
      }

      _this.lyricsElement.classList.remove('rabbit-lyrics--playing', 'rabbit-lyrics--paused', 'rabbit-lyrics--waiting', 'rabbit-lyrics--ended');

      if (status) {
        _this.lyricsElement.classList.add('rabbit-lyrics--' + status);
      }
    };
    /**
     * Synchronize media element time and lyrics lines
     */


    this.synchronize = function () {
      var time = _this.mediaElement.currentTime;
      var changed = false; // If here are active lines changed

      var activeLines = _this.lyricsLines.filter(function (line) {
        if (time >= line.startsAt && time < line.endsAt) {
          // If line should be active
          if (!line.element.classList.contains('rabbit-lyrics__line--active')) {
            // If it hasn't been activated
            changed = true;
            line.element.classList.add('rabbit-lyrics__line--active');
          }

          line.content.forEach(function (inline) {
            if (time >= inline.startsAt) {
              inline.element.classList.add('rabbit-lyrics__inline--active');
            } else {
              inline.element.classList.remove('rabbit-lyrics__inline--active');
            }
          });
          return true;
        } else {
          // If line should be inactive
          if (line.element.classList.contains('rabbit-lyrics__line--active')) {
            // If it hasn't been deactivated
            changed = true;
            line.element.classList.remove('rabbit-lyrics__line--active');
            line.content.forEach(function (inline) {
              inline.element.classList.remove('rabbit-lyrics__inline--active');
            });
          }

          return false;
        }
      });

      if (changed && activeLines.length > 0) {
        // Calculate scroll top. Vertically align active lines in middle
        var activeLinesOffsetTop = (activeLines[0].element.offsetTop + activeLines[activeLines.length - 1].element.offsetTop + activeLines[activeLines.length - 1].element.offsetHeight) / 2;
        _this.lyricsElement.scrollTop = activeLinesOffsetTop - _this.lyricsElement.clientHeight / 2;
      }
    };

    if (this.lyricsElement.rabbitLyrics) {
      // Return existing instance to avoid duplicates
      return this.lyricsElement.rabbitLyrics;
    } // Bind new instance to lyrics element


    this.lyricsElement.rabbitLyrics = this; // Merge element attribute options

    Object.assign(this, this.getOptionsFromAttributes()); // Merge user specified options

    if (options) {
      Object.assign(this, options);
    }

    this.render(); // Bind this to event handlers
    // Rest scroll bar

    this.lyricsElement.scrollTop = 0; // Bind playback update events

    this.mediaElement.addEventListener('timeupdate', this.synchronize);
    this.mediaElement.addEventListener('play', this.handleStatusChange);
    this.mediaElement.addEventListener('playing', this.handleStatusChange);
    this.mediaElement.addEventListener('pause', this.handleStatusChange);
    this.mediaElement.addEventListener('waiting', this.handleStatusChange);
    this.mediaElement.addEventListener('ended', this.handleStatusChange);
  }
  /** Change lyrics content and re-render views */


  RabbitLyrics.prototype.setLyrics = function (lyrics) {
    this.lyrics = lyrics;
    this.render();
  };
  /** Change alignment */


  RabbitLyrics.prototype.setAlignment = function (alignment) {
    this.alignment = alignment;
    this.lyricsElement.classList.remove('rabbit-lyrics--center', 'rabbit-lyrics--left', 'rabbit-lyrics--right');
    this.lyricsElement.classList.add('rabbit-lyrics--' + this.alignment);
  };
  /** Change alignment */


  RabbitLyrics.prototype.setViewMode = function (viewMode) {
    this.viewMode = viewMode;
    this.lyricsElement.classList.remove('rabbit-lyrics--clip', 'rabbit-lyrics--full', 'rabbit-lyrics--mini');
    this.lyricsElement.classList.add('rabbit-lyrics--' + this.viewMode);
  };

  RabbitLyrics.prototype.render = function () {
    var _this = this; // Add class names


    this.lyricsElement.classList.add('rabbit-lyrics');
    this.lyricsElement.classList.add('rabbit-lyrics--' + this.viewMode);
    this.lyricsElement.classList.add('rabbit-lyrics--' + this.alignment);
    this.lyricsElement.textContent = null; // Render lyrics lines

    this.lyricsLines = (0, _parseLyrics.default)(this.lyrics).map(function (line) {
      var lineElement = document.createElement('div');
      lineElement.className = 'rabbit-lyrics__line';
      lineElement.addEventListener('click', function () {
        _this.mediaElement.currentTime = line.startsAt;

        _this.synchronize();
      });
      var lineContent = line.content.map(function (inline) {
        var inlineElement = document.createElement('span');
        inlineElement.className = 'rabbit-lyrics__inline';
        inlineElement.textContent = inline.content;
        lineElement.append(inlineElement);
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, inline), {
          element: inlineElement
        });
      });

      _this.lyricsElement.append(lineElement);

      return (0, _tslib.__assign)((0, _tslib.__assign)({}, line), {
        content: lineContent,
        element: lineElement
      });
    });
    this.synchronize();
  };

  RabbitLyrics.prototype.getOptionsFromAttributes = function () {
    var _a;

    var options = {};

    if ((_a = this.lyricsElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) {
      options.lyrics = this.lyricsElement.textContent.trim();
    }

    if (this.lyricsElement.dataset.viewMode) {
      options.viewMode = this.lyricsElement.dataset.viewMode;
    }

    if (this.lyricsElement.dataset.alignment) {
      options.alignment = this.lyricsElement.dataset.alignment;
    }

    return options;
  };

  return RabbitLyrics;
}();

var _default = RabbitLyrics;
exports.default = _default;
},{"tslib":"vCxL","./parseLyrics":"fEzS"}],"BSYk":[function(require,module,exports) {

},{}],"fUdq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _RabbitLyrics.default;
  }
});

var _findMediaElement = _interopRequireDefault(require("./findMediaElement"));

var _RabbitLyrics = _interopRequireDefault(require("./RabbitLyrics"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Rabbit Lyrics
 *
 * JavaScript audio and timed lyrics synchronizer. No jQuery required.
 *
 * License: GNU General Public License version 3
 * Author: Guo Yunhe <i@guoyunhe.com>
 * Repository: https://github.com/guoyunhe/rabbit-lyrics
 */
// Support HTML initialization
document.addEventListener('DOMContentLoaded', function () {
  var elements = document.getElementsByClassName('rabbit-lyrics');

  for (var i = 0; i < elements.length; i++) {
    var lyricsElement = elements.item(i);

    if (lyricsElement) {
      var mediaElement = (0, _findMediaElement.default)(lyricsElement);

      if (mediaElement) {
        new _RabbitLyrics.default(lyricsElement, mediaElement);
      }
    }
  }
}, false);
},{"./findMediaElement":"c7W8","./RabbitLyrics":"qkbK","./index.css":"BSYk"}],"d14J":[function(require,module,exports) {
"use strict";

var _src = _interopRequireDefault(require("../src"));

var lyricsTexts = _interopRequireWildcard(require("./lyrics"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Header Lyrics
var alignmentSelect = document.getElementById('alignment-select');
var lyricsSelect = document.getElementById('lyrics-select');
var viewModeSelect = document.getElementById('viewmode-select');
var lyrics = new _src.default(document.getElementById('header-lyrics'), document.getElementById('header-audio'), {
  lyrics: lyricsTexts[lyricsSelect.value],
  alignment: alignmentSelect.value
});
lyricsSelect.addEventListener('change', function (e) {
  lyrics.setLyrics(lyricsTexts[e.target.value]);
});
alignmentSelect.addEventListener('change', function (e) {
  lyrics.setAlignment(e.target.value);
});
viewModeSelect.addEventListener('change', function (e) {
  lyrics.setViewMode(e.target.value);
});
},{"../src":"fUdq","./lyrics":"AyIz"}],"hKAx":[function(require,module,exports) {
var global = arguments[3];

/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	/**
	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
	 * additional languages or plugins yourself.
	 *
	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
	 *
	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
	 * empty Prism object into the global scope before loading the Prism script like this:
	 *
	 * ```js
	 * window.Prism = window.Prism || {};
	 * Prism.manual = true;
	 * // add a new <script> to load Prism's script
	 * ```
	 *
	 * @default false
	 * @type {boolean}
	 * @memberof Prism
	 * @public
	 */
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

	/**
	 * A namespace for utility methods.
	 *
	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
	 * change or disappear at any time.
	 *
	 * @namespace
	 * @memberof Prism
	 */
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		/**
		 * Returns the name of the type of the given value.
		 *
		 * @param {any} o
		 * @returns {string}
		 * @example
		 * type(null)      === 'Null'
		 * type(undefined) === 'Undefined'
		 * type(123)       === 'Number'
		 * type('foo')     === 'String'
		 * type(true)      === 'Boolean'
		 * type([1, 2])    === 'Array'
		 * type({})        === 'Object'
		 * type(String)    === 'Function'
		 * type(/abc+/)    === 'RegExp'
		 */
		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		/**
		 * Returns a unique number for the given object. Later calls will still return the same number.
		 *
		 * @param {Object} obj
		 * @returns {number}
		 */
		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		/**
		 * Creates a deep clone of the given object.
		 *
		 * The main intended use of this function is to clone language definitions.
		 *
		 * @param {T} o
		 * @param {Record<number, any>} [visited]
		 * @returns {T}
		 * @template T
		 */
		clone: function deepClone(o, visited) {
			visited = visited || {};

			var clone, id;
			switch (_.util.type(o)) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = /** @type {Record<string, any>} */ ({});
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return /** @type {any} */ (clone);

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return /** @type {any} */ (clone);

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
				return /** @type {any} */ (document.currentScript);
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		},

		/**
		 * Returns whether a given class is active for `element`.
		 *
		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
		 * given class is just the given class with a `no-` prefix.
		 *
		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
		 *
		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
		 * version of it, the class is considered active.
		 *
		 * @param {Element} element
		 * @param {string} className
		 * @param {boolean} [defaultActivation=false]
		 * @returns {boolean}
		 */
		isActive: function (element, className, defaultActivation) {
			var no = 'no-' + className;

			while (element) {
				var classList = element.classList;
				if (classList.contains(className)) {
					return true;
				}
				if (classList.contains(no)) {
					return false;
				}
				element = element.parentElement;
			}
			return !!defaultActivation;
		}
	},

	/**
	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
	 *
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	languages: {
		/**
		 * Creates a deep copy of the language with the given id and appends the given tokens.
		 *
		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
		 * will be overwritten at its original position.
		 *
		 * ## Best practices
		 *
		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
		 *
		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
		 *
		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
		 * @param {Grammar} redef The new tokens to append.
		 * @returns {Grammar} The new language created.
		 * @public
		 * @example
		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
		 *     // at its original position
		 *     'comment': { ... },
		 *     // CSS doesn't have a 'color' token, so this token will be appended
		 *     'color': /\b(?:red|green|blue)\b/
		 * });
		 */
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Inserts tokens _before_ another token in a language definition or any other grammar.
		 *
		 * ## Usage
		 *
		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
		 * this:
		 *
		 * ```js
		 * Prism.languages.markup.style = {
		 *     // token
		 * };
		 * ```
		 *
		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
		 * before existing tokens. For the CSS example above, you would use it like this:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'cdata', {
		 *     'style': {
		 *         // token
		 *     }
		 * });
		 * ```
		 *
		 * ## Special cases
		 *
		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
		 * will be ignored.
		 *
		 * This behavior can be used to insert tokens after `before`:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'comment', {
		 *     'comment': Prism.languages.markup.comment,
		 *     // tokens after 'comment'
		 * });
		 * ```
		 *
		 * ## Limitations
		 *
		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
		 * deleting properties which is necessary to insert at arbitrary positions.
		 *
		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
		 * Instead, it will create a new object and replace all references to the target object with the new one. This
		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
		 *
		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
		 * you hold the target object in a variable, then the value of the variable will not change.
		 *
		 * ```js
		 * var oldMarkup = Prism.languages.markup;
		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
		 *
		 * assert(oldMarkup !== Prism.languages.markup);
		 * assert(newMarkup === Prism.languages.markup);
		 * ```
		 *
		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
		 * object to be modified.
		 * @param {string} before The key to insert before.
		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
		 * object to be modified.
		 *
		 * Defaults to `Prism.languages`.
		 * @returns {Grammar} The new grammar object.
		 * @public
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || /** @type {any} */ (_.languages);
			var grammar = root[inside];
			/** @type {Grammar} */
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},

	plugins: {},

	/**
	 * This is the most high-level function in Prism’s API.
	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
	 * each one of them.
	 *
	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
	 *
	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
	 * @memberof Prism
	 * @public
	 */
	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	/**
	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
	 * {@link Prism.highlightElement} on each one of them.
	 *
	 * The following hooks will be run:
	 * 1. `before-highlightall`
	 * 2. `before-all-elements-highlight`
	 * 3. All hooks of {@link Prism.highlightElement} for each element.
	 *
	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
	 * @memberof Prism
	 * @public
	 */
	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	/**
	 * Highlights the code inside a single element.
	 *
	 * The following hooks will be run:
	 * 1. `before-sanity-check`
	 * 2. `before-highlight`
	 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
	 * 4. `before-insert`
	 * 5. `after-highlight`
	 * 6. `complete`
	 *
	 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
	 * the element's language.
	 *
	 * @param {Element} element The element containing the code.
	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
	 *
	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
	 * asynchronous highlighting to work. You can build your own bundle on the
	 * [Download page](https://prismjs.com/download.html).
	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
	 * @memberof Prism
	 * @public
	 */
	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentElement;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	/**
	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
	 * and the language definitions to use, and returns a string with the HTML produced.
	 *
	 * The following hooks will be run:
	 * 1. `before-tokenize`
	 * 2. `after-tokenize`
	 * 3. `wrap`: On each {@link Token}.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @param {string} language The name of the language definition passed to `grammar`.
	 * @returns {string} The highlighted HTML.
	 * @memberof Prism
	 * @public
	 * @example
	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
	 */
	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	/**
	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
	 * and the language definitions to use, and returns an array with the tokenized code.
	 *
	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
	 *
	 * This method could be useful in other contexts as well, as a very crude parser.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @returns {TokenStream} An array of strings and tokens, a token stream.
	 * @memberof Prism
	 * @public
	 * @example
	 * let code = `var foo = 0;`;
	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
	 * tokens.forEach(token => {
	 *     if (token instanceof Prism.Token && token.type === 'number') {
	 *         console.log(`Found numeric literal: ${token.content}`);
	 *     }
	 * });
	 */
	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	/**
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	hooks: {
		all: {},

		/**
		 * Adds the given callback to the list of callbacks for the given hook.
		 *
		 * The callback will be invoked when the hook it is registered for is run.
		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
		 *
		 * One callback function can be registered to multiple hooks and the same hook multiple times.
		 *
		 * @param {string} name The name of the hook.
		 * @param {HookCallback} callback The callback function which is given environment variables.
		 * @public
		 */
		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		/**
		 * Runs a hook invoking all registered callbacks with the given environment variables.
		 *
		 * Callbacks will be invoked synchronously and in the order in which they were registered.
		 *
		 * @param {string} name The name of the hook.
		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
		 * @public
		 */
		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};
_self.Prism = _;


// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

/**
 * Creates a new token.
 *
 * @param {string} type See {@link Token#type type}
 * @param {string | TokenStream} content See {@link Token#content content}
 * @param {string|string[]} [alias] The alias(es) of the token.
 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
 * @class
 * @global
 * @public
 */
function Token(type, content, alias, matchedStr) {
	/**
	 * The type of the token.
	 *
	 * This is usually the key of a pattern in a {@link Grammar}.
	 *
	 * @type {string}
	 * @see GrammarToken
	 * @public
	 */
	this.type = type;
	/**
	 * The strings or tokens contained by this token.
	 *
	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
	 *
	 * @type {string | TokenStream}
	 * @public
	 */
	this.content = content;
	/**
	 * The alias(es) of the token.
	 *
	 * @type {string|string[]}
	 * @see GrammarToken
	 * @public
	 */
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length | 0;
}

/**
 * A token stream is an array of strings and {@link Token Token} objects.
 *
 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
 * them.
 *
 * 1. No adjacent strings.
 * 2. No empty strings.
 *
 *    The only exception here is the token stream that only contains the empty string and nothing else.
 *
 * @typedef {Array<string | Token>} TokenStream
 * @global
 * @public
 */

/**
 * Converts the given token or token stream to an HTML representation.
 *
 * The following hooks will be run:
 * 1. `wrap`: On each {@link Token}.
 *
 * @param {string | Token | TokenStream} o The token or token stream to be converted.
 * @param {string} language The name of current language.
 * @returns {string} The HTML representation of the token or token stream.
 * @memberof Token
 * @static
 */
Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {RegExp} pattern
 * @param {number} pos
 * @param {string} text
 * @param {boolean} lookbehind
 * @returns {RegExpExecArray | null}
 */
function matchPattern(pattern, pos, text, lookbehind) {
	pattern.lastIndex = pos;
	var match = pattern.exec(text);
	if (match && lookbehind && match[1]) {
		// change the match to remove the text matched by the Prism lookbehind group
		var lookbehindLength = match[1].length;
		match.index += lookbehindLength;
		match[0] = match[0].slice(lookbehindLength);
	}
	return match;
}

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {RematchOptions} [rematch]
 * @returns {void}
 * @private
 *
 * @typedef RematchOptions
 * @property {string} cause
 * @property {number} reach
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + ',' + j) {
				return;
			}

			var patternObj = patterns[j],
				inside = patternObj.inside,
				lookbehind = !!patternObj.lookbehind,
				greedy = !!patternObj.greedy,
				alias = patternObj.alias;

			if (greedy && !patternObj.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
			}

			/** @type {RegExp} */
			var pattern = patternObj.pattern || patternObj;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				if (rematch && pos >= rematch.reach) {
					break;
				}

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween
				var match;

				if (greedy) {
					match = matchPattern(pattern, pos, text, lookbehind);
					if (!match) {
						break;
					}

					var from = match.index;
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || typeof k.value === 'string');
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					match = matchPattern(pattern, 0, str, lookbehind);
					if (!match) {
						continue;
					}
				}

				var from = match.index,
					matchStr = match[0],
					before = str.slice(0, from),
					after = str.slice(from + matchStr.length);

				var reach = pos + str.length;
				if (rematch && reach > rematch.reach) {
					rematch.reach = reach;
				}

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}

				if (removeCount > 1) {
					// at least one Token object was removed, so we have to do some rematching
					// this can only happen if the current pattern is greedy
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
						cause: token + ',' + j,
						reach: reach
					});
				}
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 * @private
 */

/**
 * @template T
 * @private
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

// Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
*/

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
*/

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
				lookbehind: true,
				inside: {
					'attr-value': {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: {
							'style': {
								pattern: /(["'])[\s\S]+(?=["']$)/,
								lookbehind: true,
								alias: 'language-css',
								inside: Prism.languages.css
							},
							'punctuation': [
								{
									pattern: /^=/,
									alias: 'attr-equals'
								},
								/"|'/
							]
						}
					},
					'attr-name': /^style/i
				}
			}
		}, markup.tag);
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-flags': /[a-z]+$/,
			'regex-delimiter': /^\/|\/$/
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var Prism = window.Prism;

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; element = elements[i++];) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	}

})();

},{}],"Focm":[function(require,module,exports) {
"use strict";

require("./static-examples");

require("./header-example");

require("prismjs");
},{"./static-examples":"ln7H","./header-example":"d14J","prismjs":"hKAx"}]},{},["Focm"], null)
//# sourceMappingURL=docs.9dfcfd65.js.map