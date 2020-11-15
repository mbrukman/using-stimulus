/**
 * @fileoverview Externs for `scope_observer.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/scope_observer.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @interface
 * @extends {Stimulus.ErrorHandler}
 */
Stimulus.ScopeObserverDelegate = class {
  /**
   *
   * @param {!Stimulus.Scope} scope
   */
  scopeConnected(scope) {}

  /**
   *
   * @param {!Stimulus.Scope} scope
   */
  scopeDisconnected(scope) {}
}

/**
 * // implements {ValueListObserverDelegate<Scope>}
 */
Stimulus.ScopeObserver = class {

  /**
   *
   * @param {!Element} element
   * @param {!Stimulus.Schema} schema
   * @param {!Stimulus.ScopeObserverDelegate} delegate
   */
  constructor(element, schema, delegate) {
    /** @type {!Element} */
    this.element;

    /** @type {!Stimulus.Schema} */
    this.schema;

    /** @type {!Stimulus.ScopeObserverDelegate} */
    this.delegate;

    // this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this)
    // this.scopesByIdentifierByElement = new WeakMap
    // this.scopeReferenceCounts = new WeakMap
  }

  /** */
  start() {  }

  /** */
  stop() {}

  /** @returns {!string} */
  controllerAttribute() { }

  // Value observer delegate

  /**
   * @param {*} token (technically, !Stimulus.Token)
   * @returns {?Stimulus.Scope}
   * @hidden
   */
  parseValueForToken(token) {  }

  /**
   * @param {!Element} element
   * @param {!Stimulus.Scope} value
   * @hidden
   */
  elementMatchedValue(element, value) {  }

  /**
   * @param {!Element} element
   * @param {!Stimulus.Scope} value
   * @hidden
   */
  elementUnmatchedValue(element, value) {  }
};
