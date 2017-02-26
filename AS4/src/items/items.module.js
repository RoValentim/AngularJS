(function () {
        'use strict';

        angular.module('MenuApp')
        .controller('ItemsController',ItemsController)

        ItemsController.$inject = ['items'];

        function ItemsController( items ) {
                var self = this;

                self.items = [];
                self.categoryDetails = {};

                self.categoryDetails.categoryName = items.data.category.name;
                self.categoryDetails.categoryShortName = items.data.category.short_name;
                self.categoryDetails.categorySpecialInstruction = items.data.category.special_instructions;

                self.items = items.data.menu_items;
        }
})()
