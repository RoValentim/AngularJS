(function () {
        "use strict";

        angular.module('public')
        .controller('MenuSignUpController', MenuSignUpController);

        MenuSignUpController.$inject = ['ApiPath', 'MenuService'];
        function MenuSignUpController( ApiPath, MenuService ) {
                var $ctrl = this;

                $ctrl.submit = function() {
                        $ctrl.basePath = ApiPath;

                        MenuService.getMenuItem(regForm.favoriteDish.value).then( function() {
                                MenuService.setUserInfo( regForm );
                                $ctrl.completed = true;
                                $ctrl.noDish = false;
                        })
                        .catch(function(errorResponse) {
                                $ctrl.completed = false;
                                $ctrl.noDish = true;
                        });
                };
        }
})();
