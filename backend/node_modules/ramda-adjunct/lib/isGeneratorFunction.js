"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ramda = require("ramda");

var GeneratorFunction = null;
var legacyCheck = null;

try {
  GeneratorFunction = new Function('return function* () {}')().constructor; // eslint-disable-line no-new-func

  legacyCheck = (0, _ramda.is)(GeneratorFunction);
} catch (e) {
  legacyCheck = _ramda.F;
}
/**
 * Checks if input value is `Generator Function`.
 *
 * @func isGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isNotGeneratorFunction|isNotGeneratorFunction}
 * @example
 *
 * RA.isGeneratorFunction(function* test() { }); //=> true
 * RA.isGeneratorFunction(null); //=> false
 * RA.isGeneratorFunction(function test() { }); //=> false
 * RA.isGeneratorFunction(() => {}); //=> false
 */


var isGeneratorFunction = (0, _ramda.curryN)(1, (0, _ramda.either)((0, _ramda.pipe)(_ramda.type, (0, _ramda.identical)('GeneratorFunction')), legacyCheck));
var _default = isGeneratorFunction;
exports["default"] = _default;