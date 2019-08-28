/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const assert = require('assert');

module.exports.getHeader = (headers, inputName) => {
  const lowerName = inputName.toLowerCase();
  const key = Object.keys(headers).find(k => k.toLowerCase() == lowerName);
  return key ? headers[key] : undefined;
};

module.exports.assertHeader = (headers, name, regexp) => {
  const value = module.exports.getHeader(headers, name);
  assert(value, `Expecting a '${name}' header`);
  assert(value.match(regexp),`Expecting '${name}' header to match ${regexp}, got ${value}`);
}

