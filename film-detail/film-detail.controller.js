filmDetail.controller('FilmDetailController', ['$scope', '$http', 'filmService', function($scope, $http, filmService){
    $scope.filmUrl = filmService.filmUrl;
    
    // Get data from swapi
    $http.get($scope.filmUrl).then(function(response){
        $scope.film = response.data;
        console.log($scope.film);
    });  
}]);