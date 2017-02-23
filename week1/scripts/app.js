(function() {
'use strict';

angular.module('LunchChecker',[])
  .controller('LunchCheckerController',LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
    $scope.LunchList ="";
    $scope.message = "";
    $scope.myDynamicClass;
    $scope.MyDivClass;

    $scope.ClearItems = function(){
      $scope.message = "";
      $scope.myDynamicClass = "";
      $scope.MyDivClass = "";
    }

    $scope.CheckIfTooMuch = function () {

        var noIfItems = $scope.LunchList.split(',');
        var ItemCount = noIfItems.length;

        for(var i = 0; i < noIfItems.length ; i++)
        {
          if(noIfItems[i] =='')
          {ItemCount = ItemCount -1}
        }

        if(ItemCount == 0)
        {
          $scope.message = "Please enter data first.";
          $scope.myDynamicClass = 'alert alert-danger';
          $scope.MyDivClass = "form-group has-error";
        }
        else if(ItemCount <= 3)
        {
            $scope.message = "Enjoy!";
            $scope.myDynamicClass = 'alert alert-success';
            $scope.MyDivClass ="form-group has-success";
        }
        else
        {
            $scope.message = "Too much!";
            $scope.myDynamicClass = 'alert alert-success';
            $scope.MyDivClass ="form-group has-success";
        }
    }
  }
})();