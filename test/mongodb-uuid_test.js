/*global describe,it*/
'use strict';
var assert = require('assert'),
  mongodbUuid = require('../lib/mongodb-uuid.js');

describe('mongodb-uuid node module.', function() {
  it('must be awesome', function() {
    assert( mongodbUuid .awesome(), 'awesome');
  });
});
