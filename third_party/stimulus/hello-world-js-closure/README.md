# Stimulus with JavaScript and Closure Compiler

## Open raw HTML with uncompiled JavaScript

Simply open [`index.html`](index.html) in your browser, it will use the
uncompiled [`hello_controller.js`](hello_controller.js) which works as-is.

## Build JavaScript with Closure Compiler

This is using Closure-compatible extern definitions in
[`//third_party/stimulus/v1_1_1/externs`][stimulus-externs]; Stimulus will be
loaded from a CDN.

Build command:

```sh
$ bazel build :app
```

**Note:** this currently fails to build due to [a bug in Closure
Compiler][closure-compiler-bug] which has been fixed, but a new version of
Closure Compiler hasn't been released yet. Once a new version of the compiler is
released and incorporated into [Bazel rules for Closure][bazel-rules-closure],
we can retry this build to see if this has been fixed.

[stimulus-externs]: ../v1_1_1/externs
[closure-compiler-bug]: https://github.com/google/closure-compiler/issues/3687
[bazel-rules-closure]: https://github.com/bazelbuild/rules_closure
