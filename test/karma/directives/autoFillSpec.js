define([ 'chai', 'lib/directives/index' ], function(chai, directivesModule) {
  'use strict';

  /* global module:false */

  var expect = chai.expect;

  return describe('camunda-commons-ui/directives/autoFill', function() {

    beforeEach(module(directivesModule.name));


    describe('bootstrap', function() {

      it('should bootstrap with module', inject(function($compile, $rootScope, $timeout) {

        var element = $compile('<input ng-model="foo" auto-fill>')($rootScope);
        $rootScope.$digest();

        element.val('FOO');

        $timeout.flush();
        $rootScope.$digest();

        expect($rootScope.foo).to.equal('FOO');
      }));

    });

  });

});