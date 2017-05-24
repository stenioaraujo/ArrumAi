app.controller('cadastroController', function($scope, $state, $http) {

	// Acho que aqui só precisa ter o id do item.
	$scope.meusItens = [];
	$scope.item = {};
	$scope.tamanhos=[
		{valor: "PP"},
		{valor: "P"},
		{valor: "M"},
		{valor: "G"},
		{valor: "GG"}
		];

	$scope.adicionarItem = function(item) {
		console.log("adicionando...")
	};

//  post /items


	$scope.initMap = function() {
    var uluru = {lat: -7.228516, lng: -35.876842};
		$scope.coords = uluru;
    $scope.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });

    $scope.marker = new google.maps.Marker({
      position: uluru,
      map: $scope.map,
			draggable: true
    });

		$scope.marker.addListener('drag', function() {
			var lat = $scope.marker.position.lat().toFixed(6);
			var lng = $scope.marker.position.lng().toFixed(6);
			$scope.coords = {lat: lat, lng: lng};
		});
  }
});
