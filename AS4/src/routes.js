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
                        templateUrl: '/AngularJS/AS4/src/menu/index.html'
                })
                .state('categories', {
                        url: '/categories',
                        templateUrl: '/AngularJS/AS4/src/categories/index.html',
                        controller: 'CategoriesController as CategoriesCtrl',
                        resolve: {
                                items: ['MenuDataService', function( MenuDataService ) {
                                        return MenuDataService.getAllCategories();
                                }]
                        }
                })
                .state('items', {
                        url: '/items/{category}',
                        templateUrl: '/AngularJS/AS4/src/items/index.html',
                        controller: 'ItemsController as ItemsCtrl',
                        resolve: {
                                items: ['MenuDataService','$stateParams',function( MenuDataService, $stateParams ) {
                                         return MenuDataService.getItemsForCategory( $stateParams.category );
                                }]
                        }
                });
        }
})();
