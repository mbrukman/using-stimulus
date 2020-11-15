/**
 * @fileoverview Externs for `target_set.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/target_set.ts
 * @externs
 */

/** @const */
var Stimulus = {};

Stimulus.TargetSet = class {

  /**
   *
   * @param {!Stimulus.Scope} scope
   */
  constructor(scope) {
    /** @type {!Stimulus.Scope} */
    this.scope;
  }

  /**
   * @returns {!Element}
   */
  element() { }

  /**
   * @returns {!string}
   */
  identifier() { }

  /**
   * @returns {!Stimulus.Schema}
   */
  schema() { }

  /**
   *
   * @param {!string} targetName
   * @returns {!boolean}
   */
  has(targetName) { }

  /**
   *
   * @param  {...!string} targetNames
   * @returns {?Element}
   */
  find(...targetNames) { }

  /**
   *
   * @param  {...!string} targetNames
   * @returns {!Array<!Element>}
   */
  findAll(...targetNames) { }
};
