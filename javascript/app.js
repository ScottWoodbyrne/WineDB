// defining the app module of the project
angular.module('YNDBApp', ['ngRoute','YNDBControllers','YNDBDirectives','YNDBServices'])
.constant("myWineConfig", {
        "wineEndpoint" : "http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=8757e0fcc2af6f00713450c0dba4eab4"
    })

.config(function($routeProvider) {
		 
		$routeProvider
		  .when('/popular', {
		  	templateUrl: 'templates/wines.html',
		  	controller: 'WineListController'
		  })
		  .when("/wine/:wineId", {
		  	templateUrl: "templates/wineDetails.html",
		  	controller: "WineDetailsController"
		  })
		 //  .when('/upcoming', {
		 //  	templateUrl: 'templates/movies.html',
			// controller: 'MovieUpcomingController'
		 //  })
		 //  .when('/topRated', {
		 //  	templateUrl: 'templates/movies.html',
			// controller: 'MovieTopRatedController'
		 //  })
		 //  .when("/nowPlaying", {
			// templateUrl: "templates/moviesDetails.html",
			// controller: "MovieNowPlayingController"
		 //  })
		  .otherwise({redirectTo: '/popular'}); 
	});
