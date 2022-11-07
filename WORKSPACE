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

workspace(
    name = "using_stimulus"
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Node.js + TypeScript support

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "6f15d75f9e99c19d9291ff8e64e4eb594a6b7d25517760a75ad3621a7a48c2df",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.7.0/rules_nodejs-4.7.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "16.18.1",
    package_json = ["//:package.json"],
    yarn_version = "1.22.19",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

# Closure support

http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "9498e57368efb82b985db1ed426a767cbf1ba0398fd7aed632fc3908654e1b1e",
    strip_prefix = "rules_closure-0.12.0",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.12.0.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/0.12.0.tar.gz",
    ],
)

load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")
rules_closure_dependencies()
rules_closure_toolchains()

# Needed to support concatjs_devserver()

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = "9bb461d5ef08e850025480bab185fd269242d4e533bca75bfb748001ceb343c3",
    urls = ["https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.3/rules_webtesting.tar.gz"],
)

# Bazel Skylib was added when upgrading `webpack-cli` to 4.9.2 to address the
# error:
#
#     ERROR:
#     [...]/.cache/bazel/_bazel_[...]/61a525b3740f61615718cb5fbe184459/external/io_bazel_rules_closure/java/com/google/javascript/jscomp/BUILD:19:13:
#     error loading package '@com_google_protobuf//': cannot load
#     '@bazel_skylib//rules:common_settings.bzl': no such file and referenced
#     by '@io_bazel_rules_closure//java/com/google/javascript/jscomp:jscomp'
#
# If this is no longer an issue in the future, or we stop using webpack, we can
# remove this.
http_archive(
    name = "bazel_skylib",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.2.1/bazel-skylib-1.2.1.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.2.1/bazel-skylib-1.2.1.tar.gz",
    ],
    sha256 = "f7be3474d42aae265405a592bb7da8e171919d74c16f082a5457840f06054728",
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")
bazel_skylib_workspace()
