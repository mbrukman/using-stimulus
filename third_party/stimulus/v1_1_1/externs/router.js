/**
 * @fileoverview Externs for `router.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/router.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @implements {Stimulus.ScopeObserverDelegate}
 */
Stimulus.Router = class {

  /**
   *
   * @param {!Stimulus.Application} application
   */
  constructor(application) {
    /** @type {!Stimulus.Application} */
    this.application;

    /** @type {!Stimulus.ScopeObserver} */
    this.scopeObserver;

    // this.scopesByIdentifier = new Multimap
    // this.modulesByIdentifier = new Map
  }

  /**
   * @return {!Element}
   */
  element() { }

  /**
   * @return {!Stimulus.Schema}
   */
  schema() { }

  /**
   * @return {!string}
   */
  controllerAttribute() { }

  /**
   * @return {!Array<!Stimulus.Module>}
   */
  modules() { }

  /**
   * @return {!Array<!Stimulus.Context>}
   */
  contexts() { }

  /** */
  start() { }

  /** */
  stop() { }

  /**
   * @param {!Stimulus.Definition} definition
   */
  loadDefinition(definition) { }

  /**
   * @param {!string} identifier
   */
  unloadIdentifier(identifier) { }

  /**
   * @param {!Element} element
   * @param {!string} identifier
   * @returns {?Stimulus.Context}
   */
  getContextForElementAndIdentifier(element, identifier) { }

  // Error handler delegate

  /**
   * @param {!Error} error
   * @param {!string} message
   * @param {*} detail
   * @hidden
   */
  handleError(error, message, detail) { }

  // Scope observer delegate

  /**
   * @param {!Stimulus.Scope} scope
   * @hidden
   */
  scopeConnected(scope) { }

  /**
   * @param {!Stimulus.Scope} scope
   * @hidden
   */
  scopeDisconnected(scope) { }
}
