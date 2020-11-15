const { Application, Controller } = window.Stimulus;

class ControllerHelper extends Controller {
  /**
   * @param {!string} name
   * @returns {!HTMLInputElement}
   * @protected
   */
  getInput(name) {
    return /** @type {!HTMLInputElement} */ (this.getElement(name));
  }

  /**
   * @param {!string} name
   * @returns {!HTMLSpanElement}
   * @protected
   */
  getSpan(name) {
    return /** @type {!HTMLSpanElement} */ (this.getElement(name));
  }

  /**
   * @param {!string} name
   * @returns {!Element}
   * @protected
   */
  getElement(name) {
    return /** @type {!Element} */ (this.targets.find(name));
  }
}

class HelloController extends ControllerHelper {
  /** @returns {!Array<!string>} */
  static get targets() {
    return ["name", "output"];
  }

  /** @returns {!HTMLInputElement} */
  get nameTarget() {
    return this.getInput("name");
  }

  /** @returns {!HTMLSpanElement} */
  get outputTarget() {
    return this.getSpan("output");
  }

  /** Show a greeting. */
  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`;
  }
}

/** @type {!Stimulus.Application} */
const app = Application.start();
app.register("hello", HelloController);
