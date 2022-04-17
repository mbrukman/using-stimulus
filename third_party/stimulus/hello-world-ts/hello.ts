import { Application, Controller } from "stimulus"

class HelloController extends Controller {
  static targets = [ "name", "output" ]

  // These declarations are necessary to tell the TypeScript compiler that these
  // variables exist; the patterns of these automatic variables is documented in
  // Stimulus: https://stimulusjs.org/reference/targets
  //
  // Note that the type of each target needs to be specified manually and must
  // match the type of HTML node that it is referring to, because the TypeScript
  // compiler will assume their correctness here, and if they don't match, you
  // may see a runtime-error instead of a compile-time error.
  declare readonly nameTarget: HTMLInputElement
  declare readonly nameTargets: HTMLInputElement[]
  declare readonly hasNameTargets: boolean

  declare readonly outputTarget: HTMLSpanElement
  declare readonly outputTargets: HTMLSpanElement[]
  declare readonly hasOutputTargets: boolean

  greet() {
    this.outputTarget.innerHTML = `Hello, ${this.name}!`
  }

  get name() {
    return this.nameTarget.value
  }
}

const application = Application.start()
application.register("hello", HelloController)
