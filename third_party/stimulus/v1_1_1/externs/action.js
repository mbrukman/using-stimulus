/**
 * @fileoverview Externs for `action.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/action.ts
 * @externs
 */

/** @const */
var Stimulus = {};

Stimulus.Action = class {

  /**
   *
   * @param {!Element} element
   * @param {!number} index
   * @param {*} descriptor (technically: Partial<ActionDescriptor>)
   */
  constructor(element, index, descriptor) {
    /** @type {!Element} */
    this.element;

    /** @type {!number} */
    this.index;

    /** @type {!EventTarget} */
    this.eventTarget;

    /** @type {!string} */
    this.eventName;

    /** @type {!string} */
    this.identifier;

    /** @type {!string} */
    this.methodName;
  }

  /** @returns {!string} */
  toString() { }
};

/**
 * Static factory method.
 *
 * @param {*} token (technically, !Stimulus.Token)
 * @returns {!Stimulus.Action}
 */
Stimulus.Action.forToken = function(token) {  };

/**
 *
 * @param {!Element} element
 * @returns {?string}
 */
Stimulus.getDefaultEventNameForElement = function (element) { };
