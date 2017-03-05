(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://floating-ridge-66828.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
