angular.
  module('starwarsApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/films', {
          template: '<film-list></film-list>'
        }).
        otherwise('/films');
    }
  ]);