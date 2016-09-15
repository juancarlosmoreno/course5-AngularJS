(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.totalValueOk = "";
  $scope.totalValueFail1 = "";
  $scope.totalValueFail2 = "";

  $scope.displayNumeric = function () {
    var msg = calculatNumericForString($scope.name);
    if(msg == 1){
       $scope.totalValueOk = "Enjoy!";
    }else if(msg==0){
       $scope.totalValueFail1 = "Please enter data first";
    }else{
       $scope.totalValueFail2 = "Too much!";
    }
    // $scope.totalValue = calculatNumericForString($scope.name);
  };


  function calculatNumericForString(string) {
    var list = [];
    var msg = 0;
    // var msg ="Please enter data first";
    if(string==""){
      return msg;
    }
    list = string.split(",");
    if(list.length <= 3){
      msg = 1;
      // msg="Enjoy!";
      }else{
      msg = 2;
      // msg = "Too much!";
    }
    return msg;
  }

});


})();