filmList.controller('FilmListController', ['$scope', '$http', 'filmService', function($scope, $http, filmService){
    $scope.sortType = "title";  // Sort based on selected attribute (Title,  episode ID)
    $scope.sortOrder = false;   // Sort order var, false for ascending - true for descending
    $scope.onHover = false;
    
    // Function to enable browser to display/hide "hidden" content (ng-show)
    $scope.hoverIn = function(){
        this.onHover = true;
    }
    $scope.hoverOut = function(){
        this.onHover = false;
    }
    
    // Function to get selected film's URL and overwrite filmUrl var on service file
    // The url will be used by film-detail module to retrieve film data from database
    $scope.getFilmUrl = function(filmUrl){
        filmService.filmUrl = filmUrl;
    }
    
    // Get data from swapi
    $http.get('https://swapi.co/api/films/').then(function(response){
        $scope.films = response.data.results;
    });  
}]);