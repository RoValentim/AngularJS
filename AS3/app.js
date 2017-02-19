(function () {
        angular.module( 'NarrowItDownApp', [] )
        .controller( 'NarrowItDownController', NarrowItDownController )
        .service( 'MenuSearchService', MenuSearchService )
        .directive( 'foundItems', FoundItems )
        .constant( 'ApiBasePath', "http://davids-restaurant.herokuapp.com" );

        function FoundItems() {
                ddo = {
                        templateUrl: 'foundItems.html',
                        restrict: 'E',
                        scope: {
                                foundItems: '<',
                                onRemove: '&'
                        },
                        controller: NarrowedMenuListDirectiveController,
                        controllerAs: 'narrowedMenu',
                        bindToController: true
                };

                return ddo;
        }

        function NarrowedMenuListDirectiveController () {
                var narrowedMenu = this;
        }

        NarrowItDownController.$inject = ['MenuSearchService'];
        function NarrowItDownController( MenuSearchService ) {
                var narrowedMenu = this;
                narrowedMenu.searchTerm = "";

                narrowedMenu.getMatchedMenuItems = function () {
                        MenuSearchService.getMatchedMenuItems( narrowedMenu.searchTerm )
                        .then( function( response ) {
                                console.log("response [" + response + "]");
                                MenuSearchService.foundItems = response;
                                narrowedMenu.found = MenuSearchService.foundItems;
                        })
                        .catch( function( error ) {
                                console.log( error );
                        });
                }

                narrowedMenu.removeFoundItem = function (itemIndex) {
                        MenuSearchService.removeFoundItemFromList(itemIndex);
                }
        }

        MenuSearchService.$inject = ['$http', 'ApiBasePath', '$filter'];
        function MenuSearchService ($http, ApiBasePath, $filter) {
                var service = this;

                service.getMatchedMenuItems = function( searchTerm ) {
                        searchTerm = $filter('lowercase')( searchTerm );

                        var response = $http({
                                method: "GET",
                                url: (ApiBasePath + "/menu_items.json")
                        });

                        return response.then( function(response) {
                                var foundItems = [];
                                var menuCategories = response.data.menu_items;

                                if( searchTerm )
                                        for( var item in response.data.menu_items ) {
                                                if( $filter('lowercase')(response.data.menu_items[item].description).includes(searchTerm) )
                                                        foundItems.push( response.data.menu_items[item] );
                                                }

                                return foundItems;
                        });
                };

                service.removeFoundItemFromList = function( itemIndex ) {
                        service.foundItems.splice( itemIndex, 1 );
                }
        };
}());
