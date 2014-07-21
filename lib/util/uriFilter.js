if (typeof define !== 'function') { var define = require('amdefine')(module); }
/* jshint unused: false */
define([

], function() {
  'use strict';

  var UriFilter = [ 'Uri', function(Uri) {
    return function(input) {
      return Uri.appUri(input);
    };
  }];

  return UriFilter;
});
