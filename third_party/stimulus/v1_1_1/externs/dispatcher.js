/**
 * @fileoverview Externs for `dispatcher.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/dispatcher.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @implements {Stimulus.BindingObserverDelegate}
 */
Stimulus.Dispatcher = class {

  /**
   * @param {!Stimulus.Application} application
   */
  constructor(application) {
    /** @type {!Stimulus.Application} */
    this.application;
  }

  /** */
  start() { }

  /** */
  stop() { }

  /**
   * @returns {!Array<!EventListener>}
   */
  eventListeners() { }

  // Error handling

  /**
   * @param {Error} error
   * @param {!string} message
   * @param {!Object=} detail
   */
  handleError(error, message, detail = {}) { }
}
