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

/* eslint-disable no-console */
/* eslint-disable no-undef */

const assert = require('assert');
const request = require('request');
const { assertHeader } = require('./testutils');

const HTTP_REQUEST_TIMEOUT_MSEC = 10000;

// See TODOs in website.test.js - they also apply here
const testURL = `https://bertrand.helix-demo.xyz/static.html?cacheKiller=${Math.random()}`;

describe(`Test the static content ${testURL}`, () => {
  const response = {};

  // "function" is needed for "this", to set timeout
  // eslint-disable-next-line func-names
  before(function (done) {
    this.timeout(HTTP_REQUEST_TIMEOUT_MSEC);
    request(testURL, async (err, res, body) => {
      assert(!err);
      assert.equal(res.statusCode, 200);
      response.raw = body;
      response.headers = res.headers;
      done();
    });
  });

  it('Contains the expected static content', () => {
    assert(response.raw.includes('this is static html!'));
  });

  it('Has the correct Content-Type', () => {
    // TODO should be text/html but for now we get this
    const expected = /application\/octet-stream.*/;
    assertHeader(response.headers, 'Content-Type', expected);
  });
});