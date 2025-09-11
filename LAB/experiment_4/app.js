var app = angular.module("exp4App", []);

// Controller for Registration
app.controller("RegistrationCtrl", function($scope) {
  $scope.user = {};
  $scope.register = function() {
    if ($scope.regForm.$valid) {
      alert("Registration Successful!\n" + JSON.stringify($scope.user, null, 2));
      $scope.user = {}; // reset form
      $scope.regForm.$setPristine();
      $scope.regForm.$setUntouched();
    }
  };
});

// Controller for Bill Payment CRUD
app.controller("BillPaymentCtrl", function($scope) {
  $scope.bills = [];

  $scope.addBill = function() {
    if ($scope.newBill && $scope.newBill.name && $scope.newBill.amount && $scope.newBill.date) {
      $scope.bills.push({
        name: $scope.newBill.name,
        amount: $scope.newBill.amount,
        date: $scope.newBill.date,
        editing: false
      });
      $scope.newBill = {};
    }
  };

  $scope.editBill = function(bill) {
    bill.editing = true;
  };

  $scope.saveBill = function(bill) {
    bill.editing = false;
  };

  $scope.deleteBill = function(index) {
    $scope.bills.splice(index, 1);
  };
});
