# Copyright (c) 2020 Google LLC
#
# Permission is hereby granted, free of charge, to any person obtaining a copy of
# this software and associated documentation files (the "Software"), to deal in
# the Software without restriction, including without limitation the rights to
# use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
# the Software, and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
# COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
# IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
# CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

package(default_visibility = ["//visibility:public"])

load("@npm//@bazel/concatjs:index.bzl", "concatjs_devserver")
load("@npm//@bazel/typescript:index.bzl", "ts_library")
load("@npm//webpack-cli:index.bzl", "webpack_cli")

ts_library(
    name = "hello",
    srcs = [
        "hello.ts",
    ],
    deps = [
        "@npm//stimulus",
    ],
)

filegroup(
    name = "hello.js",
    srcs = [
        ":hello",
    ],
    output_group = "es6_sources",
)

webpack_cli(
    name = "bundle",
    outs = ["bundle"],
    args = [
        "$(locations :hello.js)",
        "--config",
        "$(location //:webpack.config.js)",
        "-o",
        "$@",
        "--mode",
        "production",
    ],
    data = [
        ":hello.js",
        "//:webpack.config.js",
        "@npm//:node_modules",
    ],
)

concatjs_devserver(
    name = "devserver",
    port = 5000,
    serving_path = "/bundle.js",
    static_files = ["index.html"],
    deps = [":bundle"],
)
