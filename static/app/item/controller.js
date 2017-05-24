app.controller('itemController', function($scope, $state, $http, $stateParams) {
  $scope.requests = [];
  $http.get('/item/' + $stateParams.id, {params:{}}).
    then(function(response) {
      console.log($scope.item);
        $scope.item = response.data;
  });
  $scope.selectedCard="visa";
  $scope.data = {data:new Date()};
  $scope.showAlert = false;
  $scope.alugar = function(item, data) {
    var json = {user_id: 1, item_id: $scope.item.id, date: data.data.toString()}
    console.log(json);
    $http({
      url: '/requests',
      method: "POST",
      data: json
      })
  }

});
