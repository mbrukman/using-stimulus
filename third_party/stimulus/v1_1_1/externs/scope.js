/**
 * @fileoverview Externs for `scope.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/scope.ts
 * @externs
 */

/** @const */
var Stimulus = {};

Stimulus.Scope = class {

  /**
   *
   * @param {!Stimulus.Schema} schema
   * @param {!string} identifier
   * @param {!Element} element
   */
  constructor(schema, identifier, element) {
    /** @type {!Stimulus.Schema} */
    this.schema;

    /** @type {!string} */
    this.identifier;

    /** @type {!Element} */
    this.element;

    /** @type {!Stimulus.TargetSet} */
    this.targets;

    /** @type {!Stimulus.DataMap} */
    this.data;
  }

  /**
   *
   * @param {!string} selector
   * @returns {?Element}
   */
  findElement(selector) { }

  /**
   *
   * @param {!string} selector
   * @returns {!Array<!Element>}
   */
  findAllElements(selector) { }

  /**
   *
   * @param {!Array<!Element>} elements
   * @returns {!Array<!Element>}
   */
  filterElements(elements) { }

  /**
   *
   * @param {!Element} element
   * @returns {!boolean}
   */
  containsElement(element) { }
};
