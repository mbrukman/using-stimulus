const { Application, Controller } = window.Stimulus;

class HelloController extends Controller {
  static get targets() {
    return ["name", "output"];
  }

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`;
  }
}

const app = Application.start();
app.register("hello", HelloController);
