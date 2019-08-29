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

const request = require('request');
const assert = require('assert');
const jquery = require('jquery');
const { JSDOM } = require('jsdom');

class Website {
  constructor(siteUrl) {
    this.url = siteUrl;
  }

  getContent(opt, callback) {
    const path = opt.path ? opt.path : opt;
    const random = Math.random();
    const cacheKiller = opt.noCacheKiller ? '' : `?cacheKiller${random}=killit`;
    const fullUrl = `${this.url}${path}${cacheKiller}`;
    request(fullUrl, async (err, res, body) => {
      assert(!err);
      const expectStatus = 200;
      assert(res.statusCode == expectStatus, `Expected status ${expectStatus}, got ${res.statusCode} at ${fullUrl}`);
      const response = {};
      response.raw = body;
      response.$ = jquery(new JSDOM(body).window);
      response.headers = res.headers;
      callback(response);
    });

  }
}

module.exports = Website;