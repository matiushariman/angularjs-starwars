// Register 'film-list' component, along with its associated controller and template
angular.
    module('filmList').
    component('filmList', {
        templateUrl: 'film-list/film-list.template.html',
        controller: function FilmListController($http){
            // Self = controller
            var self = this;
            var sortType = "title";
            var sortOrder = false;
            
            // Get data from swapi
            $http.get('https://swapi.co/api/films/').then(function(response){
                self.films = response.data.results;
            });   
        }
});