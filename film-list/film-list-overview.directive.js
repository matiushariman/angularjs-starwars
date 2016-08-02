filmList.directive('filmOverview', function(){
   return{
       restrict: 'AECM',
       templateUrl: 'film-list/film-list-overview.template.html',
       replace: true,
       scope:{
           film: "=" // Pass film object
       }  
   } 
});