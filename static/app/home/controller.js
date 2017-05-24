app.controller('homeController', function($scope, $state, $http) {
  $scope.items = [];
  $http.get('/items', {params:{}}).
    then(function(response) {
        $scope.items = response.data;
        for(var i = 0; i < $scope.items[i]; i++) {
          if(!$scope.items[i].category) {
            $scope.items[i].category = "";
          }
        }
  });

  $scope.setCategoriaVestido = function(category) {
    if($scope.category === category) {
      $scope.category = "";
    }
  	else {
      $scope.category = category;
    }
  };

  $scope.size = "";

  $scope.setTamanho = function(size) {
    if($scope.size === size) {
      $scope.size = "";
    }
    else {
      $scope.size = size;
    }
  }

  $scope.checkbox = {range1:true, range2:true, range3:true, range4:true};
  $scope.isInPriceRange = function() {
    var inRange = [];
    for(var i = 0; i < $scope.items.length; i++) {
      if($scope.checkbox.range1 && $scope.items[i].price >= 0 && $scope.items[i].price <= 50) inRange.push($scope.items[i]);
      else if($scope.checkbox.range2 && $scope.items[i].price >= 50 && $scope.items[i].price <= 100) inRange.push($scope.items[i]);
      else if($scope.checkbox.range3 && $scope.items[i].price >= 100 && $scope.items[i].price <= 250) inRange.push($scope.items[i]);
      else if($scope.checkbox.range4 && $scope.items[i].preco >= 250) inRange.push($scope.items[i]);
    }
    return inRange;
  }

  // TODO reduzir os parâmetros ao 'id'. Estou passando todos estes porque não tem o BD ainda.
  $scope.redirecionaPaginaProduto = function(item) {
    $state.go('item', { id: item.id});
  }
});
