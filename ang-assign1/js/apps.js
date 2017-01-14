(function ()  {
  'use strict';

    angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope,$filter) {
        $scope.name="";

        $scope.findItemCount = function () {
            var arrofItems = $scope.name.split(",");

            if ($scope.name === "") {
              $scope.ChkDisplay = "Please enter data first";
              $scope.fcolor = "fred";
              $scope.bcolor = "bred";}
              else {
                if (arrofItems.length <= 3 ) {
                   $scope.ChkDisplay = "Enjoy!";
                   $scope.fcolor = "fgreen";
                   $scope.bcolor = "bgreen";}
                else {
                   $scope.ChkDisplay = "Too Much!";
                   $scope.fcolor = "fgreen";
                   $scope.bcolor = "bgreen";
                     };
                };
        };
    };
})();
