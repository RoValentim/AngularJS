(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('CheckList', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController( $scope ) {
  $scope.checkit = function() {
    if( typeof($scope.lunchList) === 'undefined' || !$scope.lunchList.length ) {
      $scope.msg = "Please enter data first";
      return;
    }

    var list = $scope.lunchList.split(",");

    if( list.length > 3 )
      $scope.msg = "Too much!";
    else
      $scope.msg = "Enjoy!";
  }
}
})();
