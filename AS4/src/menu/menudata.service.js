(function(){
        'use strict'

        angular.module( 'data' )
        .service( 'MenuDataService', MenuDataService );

        // Inject the dependencies
        MenuDataService.$inject = ['$http','ServiceBaseUrl'];

        function MenuDataService( $http, ServiceBaseUrl ){
                var self = this;

                // To get all categories
                self.getAllCategories = function() {
                        return $http({
                                method: 'GET',
                                url: ServiceBaseUrl + '/categories.json'
                        });
                }

                // To get all items from a category.
                self.getItemsForCategory = function(categoryShortName){
                        return $http({
                                method: 'GET',
                                params: {category:categoryShortName},
                                url: ServiceBaseUrl + '/menu_items.json'
                        });
                }
        }
})()
