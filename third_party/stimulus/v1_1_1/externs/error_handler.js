/**
 * @fileoverview Externs for `error_handler.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/error_handler.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @interface
 */
Stimulus.ErrorHandler = class {

  /**
   * @param {!Error} error
   * @param {!string} message
   * @param {!Object} detail
   */
  handleError(error, message, detail) { }
};
