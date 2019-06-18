# Project Helix: Advanced Example

## Status
[![codecov](https://img.shields.io/codecov/c/github/adobe/helix-example-advanced.svg)](https://codecov.io/gh/adobe/helix-example-advanced)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/helix-example-advanced.svg)](https://circleci.com/gh/adobe/helix-example-advanced)
[![GitHub license](https://img.shields.io/github/license/adobe/helix-example-advanced.svg)](https://github.com/adobe/helix-example-advanced/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/adobe/helix-example-advanced.svg)](https://github.com/adobe/helix-example-advanced/issues)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/helix-example-advanced.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/helix-example-advanced)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/helix-example-advanced.svg)](https://greenkeeper.io/)

This is a **WORK IN PROGRESS** - mostly a skeleton so far.

This advanced Helix example demonstrates the main programmable features of [Helix](https://www.project-helix.io/). 

Other Helix example repositories are found at https://github.com/topics/helix-example

## Prerequisites

This example is _not_ meant to be published with Helix Pages, it is meant for "full Helix"
users that want to use custom publishing code, VCL extensions etc.

This means that you need Adobe I/O Runtime and Fastly credentials to publish this example.

TODO: point to the Getting Started guide

## Publishing this example
To publish this repository use the `hlx clean`, `hlx build`, `hlx package` and 
`hlx deploy` commands described in the [hlx command documentation](https://www.project-helix.io/client/README.html). 

For now, you'll need to fork this repository for publishing, as `hlx deploy` modifies
the `helix-config.yaml` file to point to your deployed code on Adobe I/O Runtime, and 
you need to commit those changes for the Helix services to find that code.

## Overview

TODO

## TODO
This example should demonstrate:

* custom code: add src folder with html.htl & html.pre.js
* separate code and content: add helix-config.yaml
* proxy strain


	