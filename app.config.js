starwarsApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'film-list/film-list.template.html',
        controller: 'FilmListController'
    })
    .when('/display', {
        templateUrl: 'film-detail/film-detail.template.html',
        controller: 'FilmDetailController'
    })
});