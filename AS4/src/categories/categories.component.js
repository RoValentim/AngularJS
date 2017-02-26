(function(){
        'use strict';

        angular.module( 'MenuApp' )
        .component( 'categories', {
                templateUrl: '/AngularJS/AS4/src/categories/template.html',
                bindings:{
                        categoriesList : '<'
                }
        });
})()
