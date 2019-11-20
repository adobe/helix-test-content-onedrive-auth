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

let counter = 0;

// pre can be used to compute dynamic content properties
module.exports.pre = context => {
  context.content.data = {
    fromPreJS: "This comes from pre.js",
    time: `${new Date()}`,
    random: `${43 + Math.random()}`,
    homepage: 'https://www.project-helix.io/',
  }
};

// demonstrate hooking the before ESI pipeline stage
module.exports.before = {
  esi: (context) => {
    context.response.headers['X-marker-before'] = `esi/${counter++}`;
  },
};

// demonstrate hooking the after ESI pipeline stage
module.exports.after = {
  esi: (context) => {
    context.response.headers['X-marker-after'] = `esi/${counter++}`;
  },
};
