(function(){
        angular.module( 'MenuApp' )
        .component( 'items', {
                templateUrl: '/src/items/template.html',
                bindings: {
                        itemsList : '<',
                        categoryDetails: '<'
                }
        });
})()
