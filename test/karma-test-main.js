(function() {
  'use strict';
  var baseFiles = [
    'chai',
    'chai-spies',
    'angular',
    'angular-mocks'
  ];

  var allTestFiles = [];
  var TEST_REGEXP = /(spec|test)\.js$/i;

  var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
  };

  Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
      // Normalize paths to RequireJS module names.
      allTestFiles.push(pathToModule(file));
    }
  });

  var config = {
    paths: {
      'chai':             'node_modules/chai/chai',
      'chai-spies':       'node_modules/chai-spies/chai-spies',
      'jquery':           'test/vendor/jquery-2.1.1',

      'text': 'test/vendor/text',

      'angular':          'test/vendor/angular',
      'angular-animate':  'test/vendor/angular-animate',
      'angular-cookies':  'test/vendor/angular-cookies',
      'angular-mocks':    'test/vendor/angular-mocks',
      'angular-route':    'test/vendor/angular-route',
      'angular-sanitize': 'test/vendor/angular-sanitize',
      'angular-ui':       'test/vendor/ui-bootstrap'
    },

    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    shim: {
      'angular':          {exports: 'angular', deps: ['jquery']},
      'angular-animate':  ['angular'],
      'angular-cookies':  ['angular'],
      'angular-mocks':    ['angular'],
      'angular-route':    ['angular'],
      'angular-sanitize': ['angular'],
      'angular-ui':       ['angular']
    }
  };

  // console.info('karma, requirejs configuration', config);

  require.config(config);

  // load test infrastructure
  require(baseFiles, function(chai, chaiSpies) {

    // use spies
    chai.use(chaiSpies);

    // load test files
    require(allTestFiles, function() {

      // start karma
      window.__karma__.start();
    });

  });

}());
