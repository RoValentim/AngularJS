(function () {
        "use strict";
        angular.module('public')

        .controller('MenuMyInfoController', MenuMyInfoController);

        MenuMyInfoController.$inject = ['ApiPath', 'MenuService'];
        function MenuMyInfoController( ApiPath, MenuService ) {
                var $ctrl = this;

                $ctrl.basePath = ApiPath;

                $ctrl.info = MenuService.getUserInfo();

                if( $ctrl.info === null )
                        $ctrl.noDish = true;
                else
                        $ctrl.noDish = false;
        }
})();
