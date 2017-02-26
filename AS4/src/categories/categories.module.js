(function(){
        'use strict';

        angular.module( 'MenuApp' )
        .controller( 'CategoriesController', CategoriesController )

        CategoriesController.$inject = ['items'];

        function CategoriesController( items ) {
                var self = this;

                self.categories = [];
                self.categories = items.data;
        }
})()
