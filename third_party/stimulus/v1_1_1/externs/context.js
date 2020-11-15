/**
 * @fileoverview Externs for `context.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/context.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @implements {Stimulus.ErrorHandler}
 */
Stimulus.Context = class Context {

  /**
   * @param {!Stimulus.Module} module
   * @param {!Stimulus.Scope} scope
   */
  constructor(module, scope) {
    /** @type {Stimulus.Module} */
    this.module;

    /** @type {!Stimulus.Scope} */
    this.scope;

    /** @type {!Stimulus.Controller} */
    this.controller;

    /** @type {!Stimulus.BindingObserver} */
    this.bindingObserver;
  }

  /** */
  connect() { }

  /** */
  disconnect() { }

  /**
   * @return {!Stimulus.Application}
   */
  application() { }

  /**
   * @return {!string}
   */
  identifier() { }

  /**
   * @return {!Stimulus.Schema}
   */
  schema() { }

  /**
   * @return {!Stimulus.Dispatcher}
   */
  dispatcher() {  }

  /**
   * @return {?Element}
   */
  element() { }

  /**
   * @return {?Element}
   */
  parentElement() { }

  // Error handling

  /**
   * @param {!Error} error
   * @param {!string} message
   * @param {!Object} detail
   */
  handleError(error, message, detail = {}) { }
}
