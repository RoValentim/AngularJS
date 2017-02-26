(function(){
        angular.module( 'MenuApp' )
        .component( 'items', {
                templateUrl: '/AngularJS/AS4/src/items/template.html',
                bindings: {
                        itemsList : '<',
                        categoryDetails: '<'
                }
        });
})()
