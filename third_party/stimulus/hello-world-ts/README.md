# Stimulus "hello world" example

This example is taken from the Stimulus docs on the [Stimulus
website][stimulus-website] which is also available in the [GitHub
repo][stimulus-docs].

It has been adjusted slightly to compile with the TypeScript compiler and to be
compatible with the Webpack bundler.

To build the app, run:

```sh
$ bazel run //third_party/stimulus/hello-world-ts/devserver
```

or

```sh
$ yarn install
$ yarn serve-hello-world-ts
```

And open http://localhost:5000/ to access the sample app.


[stimulus-website]: https://stimulusjs.org/
[stimulus-docs]: https://github.com/stimulusjs/stimulus/blob/master/docs/handbook/02_hello_stimulus.md
