filmList.controller('FilmListController', ['$scope', '$http', 'filmService', function($scope, $http, filmService){
    $scope.sortType = "title";
    $scope.sortOrder = false;
    $scope.onHover = false;
    
    $scope.hoverIn = function(){
        this.onHover = true;
    }
    $scope.hoverOut = function(){
        this.onHover = false;
    }
    $scope.getFilmUrl = function(filmUrl){
        filmService.filmUrl = filmUrl;
    }
    
    // Get data from swapi
    $http.get('https://swapi.co/api/films/').then(function(response){
        $scope.films = response.data.results;
    });  
}]);