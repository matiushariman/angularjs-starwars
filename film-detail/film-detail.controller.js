filmDetail.controller('FilmDetailController', ['$scope', '$http', 'filmService', function($scope, $http, filmService){
    $scope.filmUrl = filmService.filmUrl;
    
    // Get data from swapi based on selected film's URL
    $http.get($scope.filmUrl).then(function(response){
        $scope.film = response.data;
    });  
}]);