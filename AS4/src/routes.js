(function () {
        'use strict';

        angular.module( 'MenuApp')
        .config( RoutesConfig );

        RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        function RoutesConfig( $stateProvider, $urlRouterProvider ) {
                // Redirect to home if no other URL matches
                $urlRouterProvider.otherwise('/');

                // Set up UI states
                $stateProvider
                .state('home', {
                        url: '/',
                        templateUrl: 'src/menu/index.html'
                })
                .state('categories', {
                        url: '/categories',
                        templateUrl: 'src/categories/index.html',
                        controller: 'CategoriesController as CategoriesCtrl',
                        resolve: {
                                items: ['MenuDataService', function( MenuDataService ) {
                                        return MenuDataService.getAllCategories();
                                }]
                        }
                })
                .state('items', {
                        url: '/items/{category}',
                        templateUrl: 'src/items/index.html',
                        controller: 'ItemsController as ItemsCtrl',
                        resolve: {
                                items: ['MenuDataService','$stateParams',function( MenuDataService, $stateParams ) {
                                         return MenuDataService.getItemsForCategory( $stateParams.category );
                                }]
                        }
                });
        }
})();
