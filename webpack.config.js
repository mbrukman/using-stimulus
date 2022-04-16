// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = (env, argv) => ({
  mode: argv.mode,
  resolve: {
    // Added when upgrading webpack-cli to 4.9.2 to work around this error:
    //
    //     Module not found: Error: Can't resolve 'bazel-out/k8-fastbuild/bin/third_party/stimulus/hello-world-ts/hello.mjs' [...]
    //     Did you mean './bazel-out/k8-fastbuild/bin/third_party/stimulus/hello-world-ts/hello.mjs'?
    //     Requests that should resolve in the current directory need to start with './'.
    //     Requests that start with a name are treated as module requests and resolve within module directories (node_modules).
    //     If changing the source code is not an option there is also a resolve
    //     options called 'preferRelative' which tries to resolve these kind of
    //     requests in the current directory too.
    //
    // Docs: https://webpack.js.org/configuration/resolve/#resolvepreferrelative
    preferRelative: true,
  },
});
