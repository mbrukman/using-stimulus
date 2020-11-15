/**
 * @fileoverview Externs for `error_handler.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/error_handler.ts
 * @externs
 */

/** @const */
var Stimulus = {};

Stimulus.Module = class {

  /**
   *
   * @param {!Stimulus.Application} application
   * @param {!Stimulus.Definition} definition
   */
  constructor(application, definition) {
    /** @type {!Stimulus.Application} */
    this.application;

    /** @type {!Stimulus.Definition} */
    this.definition;

    // this.contextsByScope = new WeakMap
    // this.connectedContexts = new Set
  }

  /**
   * @returns {!string}
   */
  identifier() { }

  /**
   * @returns {!Stimulus.ControllerConstructor}
   */
  controllerConstructor() {
    return this.definition.controllerConstructor
  }

  /** @returns {!Array<!Stimulus.Context>} */
  contexts() { }

  /**
   *
   * @param {!Stimulus.Scope} scope
   */
  connectContextForScope(scope) { }

  /**
   *
   * @param {!Stimulus.Scope} scope
   */
  disconnectContextForScope(scope) { }
};
