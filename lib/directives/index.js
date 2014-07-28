define([
  'angular',
  'angular-ui',
  './email',
  './engineSelect',
  './if',
  './ifLoggedIn',
  './ifLoggedOut',
  './inPlaceTextField',
  './notificationsPanel',
  './password',
  './requestAware',
  './showIfAuthorized'
], function(
  angular,
  angularUi,
  email,
  engineSelect,
  ifDirective,
  ifLoggedIn,
  ifLoggedOut,
  inPlaceTextField,
  notificationsPanel,
  password,
  requestAware,
  showIfAuthorized
) {
  'use strict';

  var directivesModule = angular.module('camunda.common.directives', ['ui.bootstrap']);


  directivesModule.directive('email',               email);
  directivesModule.directive('engineSelect',        engineSelect);
  directivesModule.directive('if',                  ifDirective);
  directivesModule.directive('ifLoggedIn',          ifLoggedIn);
  directivesModule.directive('ifLoggedOut',         ifLoggedOut);
  directivesModule.directive('inPlaceTextField',    inPlaceTextField);
  // directivesModule.directive('notificationsPanel',  notificationsPanel);
  directivesModule.directive('password',            password);
  directivesModule.directive('showIfAuthorized',    showIfAuthorized);


  directivesModule.config([
          '$modalProvider', '$tooltipProvider',
  function($modalProvider,   $tooltipProvider) {
    $modalProvider.options = {
      backdrop:     true, //can be also false or 'static'
      keyboard:     true
    };

    $tooltipProvider.options({
      animation:    true,
      popupDelay:   100,
      appendToBody: true
    });
  }]);


  return directivesModule;
});