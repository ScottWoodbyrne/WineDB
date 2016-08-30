angular.module('YNDBControllers',[])




.controller('WineListController',function($scope, WineListService,myWineConfig) {
 $scope.loading = true;
 $scope.title = 'Popular Wines';
 var url = myWineConfig.wineEndpoint + '&size=60&search=wine';
 WineListService.getList(url).then(
      function(result){
        console.log(result)
          $scope.wineList = result.data.Products.List; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})



.controller('HomeController',function($scope) {

})


.controller('WineRedController',function($scope, WineListService,myWineConfig) {
 $scope.loading = true;
 $scope.title = 'Red Wines'
 var url = myWineConfig.wineEndpoint + '&size=60&filter=categories(124)';
 WineListService.getList(url).then(
      function(result){
          $scope.wineList = result.data.Products.List; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})


.controller('WineWhiteController',function($scope, WineListService,myWineConfig) {
 $scope.loading = true;
 $scope.title = 'White Wines'
 var url = myWineConfig.wineEndpoint + '&size=60&filter=categories(125)';
 WineListService.getList(url).then(
      function(result){
          $scope.wineList = result.data.Products.List; /*res.filter(function(val){return val !== null});;*/
          $scope.loading = false;
      }
      ).catch(
        function(error) { 
          console.log('error', error);
        });
})


.controller('WineDetailsController',function($scope, $location,  
$routeParams, WineListService, myWineConfig)  {
    $scope.title  = 'Wine Details';
    var id = $routeParams.wineId;
    var url = myWineConfig.wineEndpoint  + '&product='+ id;
    WineListService.getList(url).then(
          function(result){
            $scope.wineSingle = result.data.Products.List[0];
            }
            ).catch(
              function(error) {
                $location.path('/error/'+error.data.status_message+'/'+error.status)
              });
})


.controller('WineSearchController', ['$scope', function($scope) {
      $scope.master = "";

      $scope.update = function(search) {
        $scope.master = angular.copy(search);
      };
      console.log($scope.master);
    }]);