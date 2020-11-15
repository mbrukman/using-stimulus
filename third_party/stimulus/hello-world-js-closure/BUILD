# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

load(
    "@io_bazel_rules_closure//closure:defs.bzl",
    "closure_js_binary",
    "closure_js_library",
)

closure_js_library(
    name = "hello_controller",
    srcs = ["hello_controller.js"],
    no_closure_library = True,
    deps = [
        "//third_party/stimulus/v1_1_1/externs",
    ],
)

closure_js_binary(
    name = "app",
    compilation_level = "ADVANCED",
    dependency_mode = "PRUNE",
    entry_points = ["third_party/stimulus/hello-world-js-closure/hello_controller"],
    deps = [":hello_controller"],
)

genrule(
    name = "html",
    srcs = ["index.html"],
    outs = ["app.html"],
    cmd = "sed 's/hello_controller.js/app.js/' < $(location :index.html) > $(location :app.html)",
)
