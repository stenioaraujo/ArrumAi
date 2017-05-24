app.controller('requestsController', function($scope, $state, $http, $stateParams) {

  $http.get('/requests').
    then(function(response) {
        $scope.requests = response.data.requests;
  });

  $http.get('/items').
    then(function(response) {
        $scope.items = response.data;

        for(var i = 0; i < $scope.requests.length; i++) {
          console.log($scope.requests[i]);
          $scope.requests[i].item = {};
          for(var j = 0; j < $scope.items.length; j++) {
            if($scope.requests[i].item_id === $scope.items[j].id) {
              $scope.requests[i].item = $scope.items[j];
            }
          }
        }
  })

  $scope.aceitarRequest = function(request) {
    var json = {request_id: request.id, status:1};
    $http({
      url: '/requests',
      method: "PATCH",
      data: json
    }).then(function(response) {
				  location.reload();
	    //  $state.go($state.current, {}, {reload: true});
    });
  };

  $scope.rejeitarRequest = function(request) {
    var json = {request_id: request.id, status:2};
    $http({
      url: '/requests',
      method: "PATCH",
      data: json
    }).then(function(response) {
				  location.reload();
	    //  $state.go($state.current, {}, {reload: true});
    });
  };

  $scope.redirecionaPaginaProduto = function(item) {
    $state.go('item', {id: item.id});
  }

  $scope.requestsAceitos = [];
});
