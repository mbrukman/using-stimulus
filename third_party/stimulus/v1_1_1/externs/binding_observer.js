/**
 * @fileoverview Externs for `binding_observer.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/binding_observer.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @interface
 * @extends {Stimulus.ErrorHandler}
 */
Stimulus.BindingObserverDelegate = class {

  /**
   *
   * @param {!Stimulus.Binding} binding
   */
  bindingConnected(binding) {}

  /**
   *
   * @param {!Stimulus.Binding} binding
   */
  bindingDisconnected(binding) {}
};

/**
 * // implements {Stimulus.ValueListObserverDelegate<Action>}
 * @template Action
 */
Stimulus.BindingObserver = class {

  /**
   *
   * @param {!Stimulus.Context} context
   * @param {!Stimulus.BindingObserverDelegate} delegate
   */
  constructor(context, delegate) {
    /** @type {!Stimulus.Context} */
    this.context;

    /** @type {!Stimulus.BindingObserverDelegate} */
    this.delegate;

    // this.bindingsByAction = new Map
  }

  /**  */
  start() { }

  /** */
  stop() { }

  /**
   * @returns {!Element}
   */
  element() { }

  /**
   * @returns {!string}
   */
  identifier() { }

  /**
   * @returns {!string}
   */
  actionAttribute() { }

  /**
   * @returns {!Stimulus.Schema}
   */
  schema() { }

  /**
   * @returns {!Array<!Stimulus.Binding>}
   */
  bindings() { }

  // Value observer delegate

  /**
   *
   * @param {*} token (technically, !Stimulus.Token)
   * @returns {?Action}
   */
  parseValueForToken(token) { }

  /**
   *
   * @param {!Element} element
   * @param {!Stimulus.Action} action
   */
  elementMatchedValue(element, action) { }

  /**
   *
   * @param {!Element} element
   * @param {!Stimulus.Action} action
   */
  elementUnmatchedValue(element, action) { }
}
