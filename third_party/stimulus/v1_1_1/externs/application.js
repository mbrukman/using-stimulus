/**
 * @fileoverview Externs for `application.ts` from `@stimulus/core`:
 *     https://github.com/stimulusjs/stimulus/blob/v1.1.1/packages/%40stimulus/core/src/application.ts
 * @externs
 */

/** @const */
var Stimulus = {};

/**
 * @implements {Stimulus.ErrorHandler}
 */
Stimulus.Application = class {
  /**
   *
   * @param {Element=} element
   * @param {Stimulus.Schema=} schema
   */
  constructor(element = document.documentElement, schema = Stimulus.defaultSchema) {
    /** @type {Element} */
    this.element;

    /** @type {Stimulus.Schema} */
    this.schema;

    /** @type {Stimulus.Dispatcher} */
    this.dispatcher;

    /** @type {Stimulus.Router} */
    this.router;
  }

  /**
   *
   * @param {Element=} element
   * @param {Stimulus.Schema=} schema
   * @return {!Stimulus.Application}
   */
  static start(element, schema) {}

  /** */
  async start() {  }

  /** */
  stop() {  }

  /**
   * @param {!string} identifier
   * @param {Function} controllerConstructor Technically, this should be
   *     `Stimulus.ControllerConstructor` but that doesn't work, and neither
   *     does `function(!Stimulus.Context): !Stimulus.Controller`.
   */
  register(identifier, controllerConstructor) {  }

  /**
   * @param {(!Stimulus.Definition|!Array<!Stimulus.Definition>)=} head
   * @param {...!Stimulus.Definition} rest
   * @return {undefined}
   */
  load(head, ...rest) {}

  // load(...definitions: Definition[]): void
  // load(definitions: Definition[]): void
  // load(head: Definition | Definition[], ...rest: Definition[]) { }

  /**
   *
   * @param {(!string|!Array<!string>)=} head
   * @param {...!string} rest
   * @return {undefined}
   */
  unload(head, ...rest) {}

  // unload(...identifiers: string[]): void
  // unload(identifiers: string[]): void
  // unload(head: string | string[], ...rest: string[]) {  }

  // Controllers

  /**
   * @return {!Array<!Stimulus.Controller>}
   */
  controllers() {}

  /**
   *
   * @param {Element} element
   * @param {string} identifier
   * @return {?Stimulus.Controller}
   */
  getControllerForElementAndIdentifier(element, identifier) { }

  // getControllerForElementAndIdentifier(element: Element, identifier: string): Controller | null { }

  // Error handling

  /**
   *
   * @param {Error} error
   * @param {string} message
   * @param {Object} detail
   */
  handleError(error, message, detail) {}
}
