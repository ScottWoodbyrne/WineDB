angular.module('YNDBControllers',[])

.controller('WineListController',function($scope, WineListService,myWineConfig) {
 $scope.loading = true;
 $scope.title = 'Popular Wines';
 var url = myWineConfig.wineEndpoint + '&size=30&search=wine';
 WineListService.getList(url).then(
      function(result){
        console.log(result);
          $scope.wineList = result.data.Products.List; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})

.controller('WineDetailsController',function($scope, $location,  
$routeParams, WineListService, myWineConfig)  {

    $scope.title  = 'Wine Details';
    var id = $routeParams.wineId;
    var url = myWineConfig.wineEndpoint  + '&product='+ id;
    WineListService.getList(url).then(
          function(result){
          console.log(result)
              $scope.wine  = result.data.Products.List;
            console.log($scope.wine);
            }
            ).catch(
              function(error) {
                $location.path('/error/'+error.data.status_message+'/'+error.status)
              });
})

// .controller('MovieUpcomingController',function($scope, MovieListService,myMovieConfig) {
//  $scope.loading = true;
//  $scope.title = 'Upcoming Movies'
//  var url = myMovieConfig.moviesEndpoint + '/upcoming?api_key=' + myMovieConfig.apiKey;
//  MovieListService.getList(url).then(
//       function(result){
//           $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
//           $scope.loading = false;
//       }
//       ).catch(
//         function(error) { 
//           console.log('error', error)
//         });
// })
// .controller('MovieNowPlayingController',function($scope, MovieListService,myMovieConfig) {
//  $scope.loading = true;
//  $scope.title = 'Now Playing Movies'
//  var url = myMovieConfig.moviesEndpoint + '/now_playing?api_key=' + myMovieConfig.apiKey;
//  MovieListService.getList(url).then(
//       function(result){
//           $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
//           $scope.loading = false;
//       }
//       ).catch(
//         function(error) { 
//           console.log('error', error);
           
//         });
// })

// .controller('MovieTopRatedController',function($scope, MovieListService,myMovieConfig) {
//  $scope.loading = true;
//  $scope.title = 'Top Rated Movies'
//  var url = myMovieConfig.moviesEndpoint + '/top_rated?api_key=' + myMovieConfig.apiKey;
//  MovieListService.getList(url).then(
//       function(result){
//           $scope.movieList = result.data.results; /*res.filter(function(val){return val !== null});;*/
//           $scope.loading = false;
//       }
//       ).catch(
//         function(error) { 
//           console.log('error', error)
//         });
// })
