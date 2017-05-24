var app = angular.module('app', ['ui.router', 'door3.css', 'ngCookies', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider,  $cssProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: '/static/app/home/view.html',
        })

        .state('item', {
            url: '/item/:id',
            controller: 'itemController',
            templateUrl: '/static/app/item/view.html',
            css: '/static/app/item/style.css',
        })

      /*  // TODO Colocar apenas o itemId como identificador.
        .state('itemId', {
            url: '/item/:itemPreco/:itemNome/:itemDescricao/:itemTamanho/:itemImagem/:itemComentario',
            controller: 'itemController',
            templateUrl: '/static/app/item/view.html',
        })*/

        .state('payment', {
            url: '/payment',
            controller: 'paymentController',
            templateUrl: '/static/app/payment/view.html',
        })

        .state('cadastroRoupa', {
            url: '/cadastroRoupa',
            controller: 'cadastroController',
            templateUrl: '/static/app/cadastroroupa/view.html',
        })

        .state('requests', {
            url: '/requests',
            controller: 'requestsController',
            templateUrl: '/static/app/requests/view.html',
        })

});

app.controller('mainController', function ($scope, $state) {
    
    $scope.user = {name: "Leticia", email:"casal20@gmail.com", requests: []};


    $scope.changeView = function(state) {
      $state.go(state)
    }

    $scope.redirecionaNovoAnuncio = function() {
     $state.go('cadastroRoupa');
    };
});
