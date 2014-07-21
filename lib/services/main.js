/* global ngDefine: false */

/**
 * @namespace cam.common.services
 */
ngDefine('camunda.common.services', [
  'module:camunda.common.services.debounce:./debounce',
  'module:camunda.common.services.resolver:./ResourceResolver',
  './engineRequestHeaderProvider',
  './RequestLogger',
  './RequestStatusInterceptor',
  './escape'
], function() {});
