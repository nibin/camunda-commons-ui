/* global define: false */
define([
  'angular-sanitize'
], function() {
  'use strict';
  /**
   * @name notificationsPanel
   * @memberof cam.common.directives
   * @type angular.directive
   * @description Provides a widget for user notifications
   * @example
      TODO
   */
  var notificationsTemplate =
'<div class="notifications">' +
'  <div ng-repeat="notification in notifications" class="alert" ng-class="notificationClass(notification)">' +
'    <button type="button" class="close" ng-click="removeNotification(notification)">&times;</button>' +
'    <strong class="status" ng-bind-html="trustHTML(notification.status)" compile-template></strong> ' +
'    <strong ng-if="notification.message">:</strong>' +
'    <span class="message" ng-bind-html="trustHTML(notification.message)" compile-template></span>' +
'  </div>' +
'</div>';

  return ['Notifications', '$filter', '$sce',
  function(Notifications,   $filter,   $sce) {
    return {
      restrict: 'EA',
      scope: {
        filter: '=notificationsFilter'
      },
      template: notificationsTemplate,
      link: function(scope) {

        var filter = scope.filter;

        function matchesFilter(notification) {
          if (!filter) {
            return true;
          }

          return !!$filter('filter')([ notification ], filter).length;
        }

        var notifications = scope.notifications = [];

        var consumer = {
          add: function(notification) {
            if (matchesFilter(notification)) {
              notifications.push(notification);
              return true;
            } else {
              return false;
            }
          },
          remove: function(notification) {
            var idx = notifications.indexOf(notification);
            if (idx != -1) {
              notifications.splice(idx, 1);
            }
          }
        };

        Notifications.registerConsumer(consumer);

        scope.removeNotification = function(notification) {
          notifications.splice(notifications.indexOf(notification), 1);
        };

        scope.notificationClass = function(notification) {
          var classes = [ 'error', 'success', 'warning', 'information' ];

          var type = 'information';

          if (classes.indexOf(notification.type) != -1) {
            type = notification.type;
          }

          return 'alert-' + type;
        };

        scope.trustHTML = function(msg) {
          return $sce.trustAsHtml(msg);
        };

        scope.$on('$destroy', function() {
          Notifications.unregisterConsumer(consumer);
        });
      }
    };
  }];
});
