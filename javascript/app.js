// defining the app module of the project
angular.module('YNDBApp', ['ngRoute','YNDBControllers','YNDBDirectives','YNDBServices'])
.constant("myWineConfig", {
        "wineEndpoint" : "http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=8757e0fcc2af6f00713450c0dba4eab4"
    })

//routing for navbar

.config(function($routeProvider) {
		 
		$routeProvider
			.when('/home', {
		  	templateUrl: 'templates/home.html',
		  	controller: 'HomeController'
		  })

		
		 	.when('/popular', {
		  	templateUrl: 'templates/wines.html',
		  	controller: 'WineListController'
		  })
			.when('/red', {
		  	templateUrl: 'templates/wines.html',
			controller: 'WineRedController'
		  })
		  	.when('/white', {
		  	templateUrl: 'templates/wines.html',
			controller: 'WineWhiteController'
		  })

		 

		 	.when("/wine/:wineId", {
		  	templateUrl: "templates/wineDetails.html",
		  	controller: "WineDetailsController"
		  })
		  .otherwise({redirectTo: '/home'}); 
	});
