app.controller('mapController', ['$scope', '$state', function ($scope, $state) {

  $scope.initMap = function(){
    var script = document.createElement('script');
    var uluru = {lat: -7.228516, lng: -35.876842};
    $scope.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });
    $scope.addMarkers();
  }

  $scope.$watch('items', function() {
    $scope.addMarkers();
  });

  $scope.addMarkers = function() {
    for(var i = 0; i < $scope.items.length; i++) {
      var item  = $scope.items[i];
      var marker = new google.maps.Marker({
        position: {lat:item.latitude, lng:item.longitude},
        map: $scope.map
      });
      var contentstr = '<div id="content">'+item.name+'</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentstr,
      });

      attachClickListener(marker, item);
      attachHoverListener(marker, infowindow);
    }
  }

  function attachClickListener(marker, item) {
    marker.addListener('click', function() {
      var itemListener = item;
      $scope.redirecionaPaginaProduto(itemListener);
    });
  }

  function attachHoverListener(marker, infowindow) {
    marker.addListener('mouseover', function() {
      infowindow.open($scope.map, marker);
    });
  }

  $scope.redirecionaPaginaProduto = function(item) {
    $state.go('item', { id: item.id});
  }
}]);

app.directive("map", function(){
  return {
    restrict: 'AEC',
    scope: {
      items:'=',
    },
    templateUrl: '/static/app/directives/map/view.html',
  };
});
