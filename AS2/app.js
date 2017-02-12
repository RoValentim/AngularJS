(function () {
        'use strict';

        angular.module( 'ShoppingListCheckOff', [] )
                .controller( 'ToBuyList', BuyListController )
                .controller( 'AlreadyBoughtList', BoughtListController )
                .service( 'ShoppingListCheckOffService', ShoppingListCheckOffService );

                BuyListController.$inject = ['ShoppingListCheckOffService'];
                function BuyListController( ShoppingListCheckOffService ) {
                        var buyList = this;

                        buyList.items = ShoppingListCheckOffService.getBuyItems();

                        buyList.buy = function( index, name, quantity ) {
                                ShoppingListCheckOffService.buyItem( index, name, quantity );
                        }
                }

                BoughtListController.$inject = ['ShoppingListCheckOffService'];
                function BoughtListController( ShoppingListCheckOffService ) {
                        var boughtList = this;

                        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
                }

                function ShoppingListCheckOffService() {
                        var service = this;

                        var buyItems = [
                                { name:"Cookies", quantity:10 },
                                { name:"Milk",    quantity:1 },
                                { name:"Coke",    quantity:5 },
                                { name:"Pizza",   quantity:3 },
                                { name:"Donuts",  quantity:20 }
                        ];

                        var boughtItems = [];

                        service.buyItem = function( itemIdex, itemName, quantity ) {
                                var item = {
                                        name: itemName,
                                        quantity: quantity
                                };

                                boughtItems.push( item );
                                buyItems.splice( itemIdex, 1 );
                        };

                        service.getBuyItems = function () {
                                return buyItems;
                        };

                        service.getBoughtItems = function () {
                                return boughtItems;
                        };
                }
})();
