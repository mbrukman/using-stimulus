/**
 * @fileoverview Externs for `controller.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/controller.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @interface
 */
Stimulus.ControllerConstructor = class {
  /** */
  bless() { }

  /**
   *
   * @param {!Stimulus.Context} context
   * @returns {!Stimulus.Controller}
   */
  new(context) { }
};

/**
 * @implements {Stimulus.ControllerConstructor}
 */
Stimulus.Controller = class {

  /** */
  static bless() { }

  /**
   *
   * @param {!Stimulus.Context} context
   */
  constructor(context) {
    /** @type {!Stimulus.Context} */
    this.context;
  }

  /** @returns {!Stimulus.Application} */
  get application() { }

  /** @returns {!Stimulus.Scope} */
  get scope() { }

  /** @returns {!Element} */
  get element() { }

  /** @returns {!string} */
  get identifier() { }

  /** @returns {!Stimulus.TargetSet} */
  get targets() { }

  /** @returns {!Stimulus.DataMap} */
  get data() { }

  /** */
  initialize() { }

  /** */
  connect() { }

  /** */
  disconnect() { }
};

/** @type {!Array<!string>} */
Stimulus.Controller.targets;
