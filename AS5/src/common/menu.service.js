(function () {
        "use strict";

        angular.module('common')
        .service('MenuService', MenuService);

        MenuService.$inject = ['$http', 'ApiPath'];
        function MenuService($http, ApiPath) {
                var service = this;
                var userInfo = null;

                service.getCategories = function () {
                        return $http.get(ApiPath + '/categories.json').then(function (response) {
                                return response.data;
                        });
                };

                service.getMenuItems = function (category) {
                        var config = {};
                        if (category) {
                                config.params = {'category': category};
                        }

                        return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
                                return response.data;
                        });
                };

                service.getMenuItem = function( short_name ) {
                        var service = this;

                        return $http.get( ApiPath + '/menu_items/' + short_name + '.json' ).then(function (response) {
                                return response.data;
                        });
                };

                service.setUserInfo = function( regForm ) {
                        var service = this;

                        userInfo = {'firstName':regForm.firstName.value,
                                'lastName':regForm.lastName.value,
                                'email':regForm.email.value,
                                'phone':regForm.phone.value,
                                'favoriteDish':regForm.favoriteDish.value};
                        console.log(userInfo);
                };

                service.getUserInfo = function () {
                        var service = this;
                        return userInfo;
                };
        }
})();
