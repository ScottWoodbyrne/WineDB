angular.module('YNDBServices',[]).factory('WineListService',function($http) {
//   
    return  { getList: getList };

    function getList(url){
			return $http.get(url);
        };
});
