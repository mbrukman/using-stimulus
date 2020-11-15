/**
 * @fileoverview Externs for `binding.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/binding.ts
 * @externs
 */

/** @const */
var Stimulus = {};

Stimulus.Binding = class {

  /**
   *
   * @param {!Stimulus.Context} context
   * @param {!Stimulus.Action} action
   */
  constructor(context, action) {
    /** @type {!Stimulus.Context} */
    this.context;

    /** @type {!Stimulus.Action} */
    this.action;
  }

  /** @returns {!number} */
  index() { }

  /** @returns {!EventTarget} */
  eventTarget() { }

  /** @returns {!string} */
  identifier() { }

  /** @returns {!Event} */
  handleEvent(event) { }

  /** @returns {!string} */
  eventName() { }

  /** @returns {!Function} */
  method() { }
};
