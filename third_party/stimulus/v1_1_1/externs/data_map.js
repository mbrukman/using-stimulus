/**
 * @fileoverview Externs for `data_map.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/data_map.ts
 * @externs
 */

/** @const */
var Stimulus = {};

Stimulus.DataMap = class {

  /**
   * @param {!Stimulus.Scope} scope
   */
  constructor(scope) {
    /** @type {!Stimulus.Scope} */
    this.scope;
  }

  /** @returns {!Element} */
  element() { }


  /** @returns {!string} */
  identifier() { }

  /**
   *
   * @param {!string} key
   * @returns {!string|null}
   */
  get(key) { }

  /**
   *
   * @param {!string} key
   * @param {!string} value
   * @returns {!string|null}
   */
  set(key, value) { }

  /**
   *
   * @param {!string} key
   * @returns {!boolean}
   */
  has(key) { }

  /**
   *
   * @param {!string} key
   * @returns {!boolean}
   */
  delete(key) { }
};
